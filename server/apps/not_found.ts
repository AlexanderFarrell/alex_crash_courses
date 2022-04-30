import {App} from "./app";
import * as e from "express";

export class NotFound implements App {
    GetName(): string {
        return "Not Found Router";
    }

    SetupModule(app: e.Application) {
    }

    SetupRoutes(app: e.Application) {
        app.use((req, res, next) => {
            NotFound.RenderNotFound(res);
        })
    }

    static RenderNotFound(res) {
        res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs'})
    }
}