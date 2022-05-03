create type item_type as enum (
    'class',
    'unit',
    'app',
    'page',
    'game',
    'example'
    );

alter type item_type add value 'lesson';

create table item
(
    id          serial primary key,
    title       varchar(64) not null unique,
    description varchar(200),
    item_type   item_type   not null
);

alter table item
add column created_on timestamp default now();

update item
set created_on=now();

alter table item
alter column created_on set not null;

create table item_item_link
(
    id          serial primary key,
    item_id_one int not null references item (id) on delete cascade,
    item_id_two int not null references item (id) on delete cascade,
    constraint u_one_two unique (item_id_one, item_id_two)
);

select i.title as title, i.description as description, p.html as html
from item i
         inner join page p on i.id = p.item_id
where item_type='page'
order by i.created_on
limit 3;