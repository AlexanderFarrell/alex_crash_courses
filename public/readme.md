# Public

A place to share public files from the server.

Examples include

- JavaScript files
- Images
- Stylesheets

## Folders

Folder | Description
-------|------------
apps   | Where each app or game is stored. They each have their own files
images | Image files for web pages
javascripts | JavaScript files for web pages. Gives logic to the web pages.
stylesheets | SCSS and CSS stylesheets, which define how web pages are laid out

## Files

File | Description
-----|------------
favicon.png | The logo displayed when the user saves the website as a favorite. Also shown in tabs on most browsers.
readme.md | This file you are currently reading. Written in markdown.

## Static Serving

The server shares files statically. In other words, by going to the relative url '/favicon.png' in context of the server, it will retrieve the following:

![favicon.png](./favicon.png)