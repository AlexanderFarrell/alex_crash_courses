create view pages as
(
select i.title as title, i.description as description, p.html as html, i.id as item_id, p.id as page_id
from page p
         inner join item i on i.id = p.item_id
    );

create view classes as
(
select id, title, description
from item
where item_type = 'class'
    );

create view units as
(
select id, title, description
from item
where item_type = 'unit'
    );

create view lessons as
(
select id, title, description
from item
where item_type = 'lesson'
    );