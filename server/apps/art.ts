import {RenderPage, RouteNode} from "../routes/route";
import {App} from "./app";
import e = require("express");


export class Art implements App {
    GetName(): string {
        return "Art";
    }

    SetupModule(app: e.Application) {

    }

    SetupRoutes(app: e.Application) {
        app.get('/art', async (req, res) => {
            RenderPage(res,
                'Art',
                'art.ejs',
                {});
        })
    }

}

let data = {}