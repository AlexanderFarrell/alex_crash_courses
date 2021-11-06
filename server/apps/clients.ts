import {RouteNode, TryAppDataRoute, TryRenderRoute, TryRoute} from "../routes/route";
import {Application} from "express";
import {Data} from "./database";

export class Clients extends RouteNode {
    Setup(app: Application, parent_route: string) {
        super.Setup(app, parent_route);

        TryRenderRoute(
            app,
            `${parent_route}/apps/:name`,
            ['name'],
            "Unable to retrieve app",
            'app/app.ejs',
            async (name) => {
                return await this.GetApp(name)
            },
            (name) => {
                return name + " - Apps - ";
            }
        )


        TryRenderRoute(
            app,
            `${parent_route}/games/:name`,
            ['name'],
            "Unable to retrieve game.",
            'app/app.ejs',
            async (name) => {
                return await this.GetApp(name)
            },
            (name) => {
                return name + " - Games - ";
            }
        )
    }

    async GetApp(app_name: string) {
        return await Data.Query(`
            select i.title as title, i.description as description, p.html as html
            from page p
            inner join item i on i.id = p.item_id
            where i.title = $1
            and i.item_type='app'`,
            app_name);
    }

    async GetGame(app_name: string) {
        return await Data.Query(`
            select i.title as title, i.description as description, p.html as html
            from page p
            inner join item i on i.id = p.item_id
            where i.title = $1
            and i.item_type='game'`,
            app_name);
    }
}