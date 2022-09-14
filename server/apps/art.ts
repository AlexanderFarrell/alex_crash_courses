import {RenderPage, RouteNode} from "../routes/route";
import {App} from "./app";
import e = require("express");
import {Data} from "./database";


export class Art implements App {
    GetName(): string {
        return "Art";
    }

    SetupModule(app: e.Application) {

    }

    SetupRoutes(app: e.Application) {
        app.get('/art', async (req, res) => {
            let collections = await this.GetCollections();
            RenderPage(res,
                'Art',
                'art.ejs',
                {collections});
        })
    }

    async GetCollections() {
        return (await Data.Query(
            `select * from collection limit 100`
        )).rows;
    }
}