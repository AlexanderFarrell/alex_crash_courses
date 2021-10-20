"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes_1 = require("./routes");
const heroku_ssl_redirect_1 = require("heroku-ssl-redirect");
const server = express();
const port = process.env.PORT || 3000;
// view engine setup
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '../public')));
(0, routes_1.SetupIndexApi)(server);
// if (port != 3000) {
//     server.use((req, res, next) => {
//         if (req.header('x-forwarded-proto') !== 'https')
//             res.redirect(`https://${req.header('host')}${req.url}`)
//         else
//             next()
//     })
// }
server.use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs' });
});
server.use((0, heroku_ssl_redirect_1.default)());
server.listen(port, () => {
    console.log(`Listening on ${port}`);
    console.log(`View at localhost:${port} if local.`);
});
module.exports = server;
//# sourceMappingURL=server.js.map