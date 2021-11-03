# Server

The program run on a machine which hosts the website.

## Folders

Folder | Description
-------|------------
[apps](./apps)   | Different pieces of the server application, such as the Tutorials (guide) and Database. Sometimes called **modules** in other set ups. 
[routes](./routes) | How does another machine send and receive information from the server? How does it handle messages received?
[views](./views)  | What is displayed to the user. These are EJS files, which end up creating an HTML page. EJS can add things to an HTML page on the server before sending it to the user. In other words, its an HTML template engine.

## Files

File | Description
-----|--------
PaServer.ts | A reusable ExpressJS server with several standard bells and whistles. It supports a Postgres database, some security plugins, static hosting of a public folder by default, HTTPS, and has a development mode and a production mode.
readme.md | This file you are reading, written in Markdown.
~~server.config.json~~ | A file you won't see because its ignored. This contains database credentials and other set up information in a development environment. **Remember to ignore it from being included in Git**
server.ts | The entry to the server app. This is the file we run to start the server. We create a PaServer, attach our routes and listen for incoming connections.
template.server.config.json | An example template for a server.config.json file. **To use, rename to server.config.json and make sure you ignore it from being included on Git.** 

## Note about TypeScript

All TypeScript files .ts also have the equivalent transpiled JavaScript file .js . Also for testing purposes, a .js.map file is created for debugging as well. This is all controlled by the [tsconfig.json](./../tsconfig.json) file at the root folder of the project (up one folder from this one).