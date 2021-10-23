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

// @ts-ignore
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'server.config.json')));

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
        server.use(helmet());
        SetupDatabaseProduction();
        break;
    case 'development':
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