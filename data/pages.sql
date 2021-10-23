create table page
(
    id      serial primary key,
    item_id int  not null unique references item (id) on delete cascade,
    html    text not null
);

alter table page
    add column date date default date(now());

create procedure add_page(title_in varchar(64), description_in varchar(200), html_in text, kind item_type)
    language plpgsql
as
$$
declare
    item_id_in int;
begin
    insert into item (title, description, item_type)
    values (title_in, description_in, kind)
    returning id into item_id_in;

    insert into page (item_id, html)
    values (item_id_in, html_in);
end;
$$;

create procedure add_lesson(title_in varchar(64), description_in varchar(200), unit_name varchar(64), html_in text)
    language plpgsql
as
$$
begin
    if (select count('any') from item where title = unit_name limit 1) > 0
    then
        call add_page(title_in, description_in, html_in, 'lesson');
        insert into item_item_link (item_id_one, item_id_two)
        values ((select id from item where title = unit_name limit 1),
                (select id from item where title = title_in limit 1));
    else
        raise exception 'No such unit with name';
    end if;
end;
$$;

create procedure add_unit(title_in varchar(64), description_in varchar(200), html_in text, class_name varchar(64))
    language plpgsql
as
$$
begin
    if (select count('any') from item where title = class_name limit 1) > 0
    then
        call add_page(title_in, description_in, html_in, 'unit');
        insert into item_item_link (item_id_one, item_id_two)
        values ((select id from item where title = class_name limit 1),
                (select id from item where title = title_in limit 1));
    else
        raise exception 'No such class with name';
    end if;
end;
$$;

create procedure add_course_class(title_in varchar(64), description_in varchar(200), html_in text)
    language plpgsql
as
$$
begin

    call add_page(title_in, description_in, html_in, 'class');
end;
$$;

create procedure add_app(title_in varchar(64), description_in varchar(200), html_in text)
    language plpgsql
as
$$
begin
    call add_page(title_in, description_in, html_in, 'app');
end;
$$;

create procedure add_game(title_in varchar(64), description_in varchar(200), html_in text)
    language plpgsql
as
$$
begin
    call add_page(title_in, description_in, html_in, 'game');
end;
$$;