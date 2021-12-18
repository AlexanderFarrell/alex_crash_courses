import * as path from "path";
import * as fs from "fs";

import {SetupDatabaseDevelopment, SetupDatabaseProduction} from "./apps/database";

import {Application} from "express";
import * as express from 'express';
import * as cookieParser from "cookie-parser";
import * as logger from 'morgan';
import * as helmet from "helmet";
import * as enforce from 'express-sslify';
import {App} from "./apps/app";

export class PaServer {
    public Express: Application;
    public Apps: Map<string, App>;

    constructor() {
        const runtime_mode = process.env.RUNTIME_MODE || 'development';

        this.Apps = new Map<string, App>();

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
                            "script-src": ["'self'", "https://assets.calendly.com"],
                            "object-src": ["'self'", "https://wakatime.com"],
                            "img-src": ["'self'", "https://img.itch.zone"],
                            "style-src": ["'self'", "https://cdn.jsdelivr.net/gh/devicons/"]
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

    Start(app: App) {
        this.Apps.set(app.GetName(), app);
        console.log(`Setting Up App: ${app.GetName()}`);
        app.SetupModule(this.Express);
        console.log(`\t App "${app.GetName()}" is running.`)
    }

    Use(on: (req, res, next) => void){
        this.Express.use(on);
    }

    Run() {
        this.Apps.forEach((app, key) => {
            app.SetupRoutes(this.Express);
        })

        const port = process.env.PORT || 3000;
        this.Express.listen(port, () => {
            console.log(`Listening on ${port}`);
            console.log(`View at http://localhost:${port} if local.`);
        })
    }
}