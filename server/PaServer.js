"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaServer = void 0;
const path = require("path");
const fs = require("fs");
const database_1 = require("./apps/database");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const enforce = require("express-sslify");
class PaServer {
    constructor() {
        const runtime_mode = process.env.RUNTIME_MODE || 'development';
        this.Apps = new Map();
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
                this.Express.use(enforce.HTTPS({ trustProtoHeader: true }));
                this.Express.use(helmet({
                    contentSecurityPolicy: {
                        directives: Object.assign(Object.assign({}, helmet.contentSecurityPolicy.getDefaultDirectives()), { "script-src": ["'self'", "https://assets.calendly.com"], "object-src": ["'self'", "https://wakatime.com"], "img-src": ["'self'", "https://img.itch.zone"], "style-src": ["'self'", "https://cdn.jsdelivr.net/gh/devicons/"] })
                    }
                }));
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
    }
    Start(app) {
        this.Apps.set(app.GetName(), app);
        console.log(`Setting Up App: ${app.GetName()}`);
        app.SetupModule(this.Express);
        console.log(`\t App "${app.GetName()}" is running.`);
    }
    Use(on) {
        this.Express.use(on);
    }
    Run() {
        this.Apps.forEach((app, key) => {
            app.SetupRoutes(this.Express);
        });
        const port = process.env.PORT || 3000;
        this.Express.listen(port, () => {
            console.log(`Listening on ${port}`);
            console.log(`View at localhost:${port} if local.`);
        });
    }
}
exports.PaServer = PaServer;
//# sourceMappingURL=PaServer.js.map