"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes_1 = require("./routes");
const fs = require("fs");
const database_1 = require("./apps/database");
const enforce = require("express-sslify");
const server = express();
const port = process.env.PORT || 3000;
const runtime_mode = process.env.RUNTIME_MODE || 'development';
// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '../public')));
switch (runtime_mode) {
    case 'production':
        server.use(enforce.HTTPS({ trustProtoHeader: true }));
        // server.use(helmet.contentSecurityPolicy({
        //     directives: {
        //         defaultSrc: ["'self'", 'calendly.com'],
        //         scriptSrc: ["'self'"],
        //         styleSrc: ["'self'", 'style.com'],
        //         imgSrc: ["'self'", 'data:'],
        //         reportUri: '/report-violation'
        //     }
        // }));
        // server.use(helmet.hidePoweredBy());
        // // server.use(helmet.hpkp());
        // server.use(helmet.hsts());
        // server.use(helmet.ieNoOpen());
        // // server.use(helmet.noCache());
        // server.use(helmet.noSniff());
        // server.use(helmet.frameguard());
        // server.use(helmet.xssFilter());
        (0, database_1.SetupDatabaseProduction)();
        break;
    case 'development':
        // @ts-ignore
        const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'server.config.json')));
        (0, database_1.SetupDatabaseDevelopment)(config);
        break;
    default:
        break;
}
(0, routes_1.SetupIndexApi)(server);
server.use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs' });
});
// server.use(sslRedirect());
server.listen(port, () => {
    console.log(`Listening on ${port}`);
    console.log(`View at localhost:${port} if local.`);
});
module.exports = server;
//# sourceMappingURL=server.js.map