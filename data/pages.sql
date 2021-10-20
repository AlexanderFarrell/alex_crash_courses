create table page
(
    id      serial primary key,
    item_id int  not null unique references item (id) on delete cascade,
    html    text not null
);

create procedure add_page(title_in varchar(64), description_in varchar(200), html_in text)
    language plpgsql
as
$$
declare
    item_id_in int;
begin
    insert into item (title, description, item_type)
    values (title_in, description_in, 'page')
    returning id into item_id_in;

    insert into page (item_id, html)
    values (item_id_in, html_in);
end;
$$;