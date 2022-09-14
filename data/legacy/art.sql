create table collection (
    id serial primary key,
    title varchar(50) not null,
    caption varchar(50) not null,
    description text not null
);

alter table collection
add column thumbnail varchar(50) not null;

create table picture (
    id serial primary key,
    title varchar(50) not null unique,
    description text not null,
    url varchar(200) not null,
    collection_id int references collection(id)
);

create table poem (
    id serial primary key,
    title varchar(50) not null,
    content text not null
);

insert into collection (title, caption, description, thumbnail)
VALUES ('Fractals', 'Fractals', '', '/art/fractal/fractal.jpg');

insert into collection (title, caption, description, thumbnail)
VALUES ('Shaped Light', 'Upon black canvas', '', '/art/shaped_light/art2.jpg'),
('Solar System', 'Renders', '', '/art/solar_system/space1.jpg');

update collection
    set thumbnail='/art/fractal/fractal6.jpg'
where title='Fractals';

truncate collection cascade ;