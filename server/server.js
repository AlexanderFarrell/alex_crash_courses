"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var routes_1 = require("./../routes");
var server = express();
var port = 3000;
// view engine setup
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '../public')));
(0, routes_1.SetupIndexApi)(server);
server.use(function (req, res, next) {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs' });
});
server.listen(port, function () {
    console.log("Listening on " + port);
    console.log("View at localhost:" + port + " if local.");
});
module.exports = server;
//# sourceMappingURL=server.js.map