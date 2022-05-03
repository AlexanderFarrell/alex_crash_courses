# Data

This folder contains files used for setting up, populating and maintaining the database.

All SQL files here are written for a PostgreSQL database.

Item | Description
-----|-------
classes.sql | Sets up "Classes", which teach a topic in programming.
item.sql | Sets up "items". Items include things like classes, lessons, apps, etc. They can link to each other, have a title, have a description, and a specific type.
pages.sql | Sets up "Pages", which render as HTML when retrieved. 
units.sql | Sets up "Units", which are sub-topics or concepts of a topic in programming.
views.sql | Sets up various "Views" for the database, which let us type less and more powerfully to retrieve data from the database.
readme.md | This file you are viewing, written in Markdown

---

## Comments

There is a **development** database and a **production** database.

The login credentials for both are *not* committed to this repo, and are private.

### Development

The development database is used to build and test the logic before it is released. This way, the website does not have to be taken down everytime we want to use it!

It also isolates the data from development. It keeps data publicly available more **integral** and **available**.

### Production

The production database is used to host data publicly, and is used by www.alexanderfarrell.com. One example is when you view a lesson in the Tutorials section. The lessons are stored as data, and you retrieve it when you want to view a lesson!

Production may need to be taken down from time to time, but only when it is ready to make a change (which was already tested and modified on the development database).