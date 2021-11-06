import {Application} from "express";
import {RenderPage} from "./route";

export function SetUpPublicationsRouter(app: Application) {
    app.get('/pub', (req, res) => {
        RenderPage(res, 'Publications', 'publications/publications.ejs', {});
    })

    app.get('/pub/:name', (req, res) => {
        let name = req.params['name'];


    })
}