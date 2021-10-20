create type item_type as enum (
    'class',
    'unit',
    'app',
    'page',
    'game',
    'example'
    );

create table item
(
    id          serial primary key,
    title       varchar(64) not null unique,
    description varchar(200),
    item_type   item_type   not null
);

create table item_item_link
(
    id          serial primary key,
    item_id_one int not null references item (id) on delete cascade,
    item_id_two int not null references item (id) on delete cascade,
    constraint u_one_two unique (item_id_one, item_id_two)
);