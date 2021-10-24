import * as express from 'express';
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from 'morgan';
import {SetupIndexApi} from "./routes";
import * as fs from "fs";
import {Data, SetupDatabaseDevelopment, SetupDatabaseProduction} from "./apps/database";
import * as helmet from 'helmet';
import * as enforce from 'express-sslify';

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
        server.use(enforce.HTTPS({trustProtoHeader: true}));
        // server.use(helmet())
        server.use(helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'", 'calendly.com'],
                scriptSrc: ["'self'"],
                scriptSrcElem: ["'self'", 'calendly.com'],
                styleSrc: ["'self'"],
                imgSrc: ["'self'", 'itch.io'],
                reportUri: '/report-violation'
            }
        }));
        server.use(helmet.hidePoweredBy());
        // server.use(helmet.hpkp());
        server.use(helmet.hsts());
        server.use(helmet.ieNoOpen());
        // server.use(helmet.noCache());
        server.use(helmet.noSniff());
        server.use(helmet.frameguard());
        server.use(helmet.xssFilter());
        SetupDatabaseProduction();
        break;
    case 'development':
        // @ts-ignore
        const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'server.config.json')));
        SetupDatabaseDevelopment(config);
        break;
    default:
        break;
}

SetupIndexApi(server);

server.use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs'})
})

// server.use(sslRedirect());

server.listen(port, () => {
    console.log(`Listening on ${port}`);
    console.log(`View at localhost:${port} if local.`);
})

module.exports = server;