import {App} from "./app";
import * as e from "express";
import {RenderPage} from "../routes/route";
import {Data} from "./database";

export class Publications implements App {
    GetName(): string {
        return "Publications";
    }

    SetupModule(app: e.Application) {

    }

    SetupRoutes(app: e.Application) {
        app.get('/pub', async (req, res) => {
            RenderPage(res, 'Pages', 'publications/publications.ejs', {});
        })

        app.get(`/pub/:name`, async (req, res) => {
            let name = req.params['name'];
            let publications = await Publications.GetPublication(name);
            if (publications.length > 0) {
                let data = {pub: publications[0]};
                RenderPage(res, publications[0]['title'], 'publications/page.ejs', data);
            } else {
                RenderPage(res, 'Cannot Find', 'publications/none.ejs', {});
            }
        })
    }

    private static async GetPublication(name) {
        return (await Data.Query(
            `select i.title as title, i.description as description, p.html as html
            from item i
            inner join page p on i.id = p.item_id
            where item_type='page'
            and title=$1
            limit 1`,
            name
        )).rows;
    }
}