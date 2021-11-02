import * as path from "path";
import * as fs from "fs";

import {SetupDatabaseDevelopment, SetupDatabaseProduction} from "./apps/database";

import {Application} from "express";
import * as express from 'express';
import * as cookieParser from "cookie-parser";
import * as logger from 'morgan';
import * as helmet from "helmet";
import * as enforce from 'express-sslify';

export class PaServer {
    public Express: Application;

    constructor() {
        const runtime_mode = process.env.RUNTIME_MODE || 'development';

        this.Express = express();
        this.Express.set('views', path.join(__dirname, 'views'));
        this.Express.set('view engine', 'ejs');

        this.Express.use(logger('dev'));
        this.Express.use(express.json());
        this.Express.use(express.urlencoded({ extended: false }));
        this.Express.use(cookieParser());
        this.Express.use(express.static(path.join(__dirname, '../public')));

        switch (runtime_mode) {
            case 'production':
                this.Express.use(enforce.HTTPS({trustProtoHeader: true}));
                this.Express.use(helmet({
                    contentSecurityPolicy: {
                        directives: {
                            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                            "script-src": ["'self'", "'calendly.com'"],
                            "object-src": ["'wakatime.com'"],
                        }
                    }
                }))
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
    }

    Use(on: (req, res, next) => void){
        this.Express.use(on);
    }

    Run() {
        const port = process.env.PORT || 3000;
        this.Express.listen(port, () => {
            console.log(`Listening on ${port}`);
            console.log(`View at localhost:${port} if local.`);
        })
    }
}