import {Page, RenderPage, RouteNode, TryAppDataRoute, TryRenderRoute, TryRoute} from "../routes/route";
import {Data} from "./database";
import {Application} from "express";

export class Guide extends RouteNode {
    constructor() {
        super('guide', async (req, res) => {
            try {
                const classes = await this.GetClasses();
                RenderPage(res, 'Guides', 'guide/guide.ejs', {classes: classes});
            } catch (e) {
                console.error(e);
                res.sendStatus(500); //TODO: Help this
            }
        })
    }


    Setup(app: Application, parent_route: string) {
        super.Setup(app, parent_route);

        //Data Routes
        app.get(`${parent_route}/guide/data/classes/`, async (req, res) => {
            try {
                const data = await this.GetClasses();
                if (data.length > 0) {
                    res.json(data);
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        app.get(`${parent_route}/guide/data/classes/:name`, async (req, res) => {
            try {
                const data = await this.GetUnits(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        app.get(`${parent_route}/guide/data/units/:name`, async (req, res) => {
            try {
                const data = await this.GetLessons(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        app.get(`${parent_route}/guide/data/lessons/:name`, async (req, res) => {
            try {
                const data = await this.GetLessonPage(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        //Page Routes
        app.get(`${parent_route}/guide/classes/:name`, async (req, res) => {
            try {
                const data = await this.GetUnits(req.params['name']);
                if (data.length > 0) {
                    RenderPage(res, req.params['name'], 'guide/class.ejs', {units: data})
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        app.get(`${parent_route}/guide/units/:name`, async (req, res) => {
            try {
                const data = await this.GetLessons(req.params['name']);
                if (data.length > 0) {
                    RenderPage(res, req.params['name'], 'guide/unit.ejs', {lessons: data})
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

        app.get(`${parent_route}/guide/lessons/:name`, async (req, res) => {
            try {
                const data = await this.GetLessonPage(req.params['name']);
                if (data.length > 0) {
                    let d = {lesson: data[0]};
                    RenderPage(res, data[0]['title'], 'guide/lesson.ejs', d);
                } else {
                    res.sendStatus(404);
                }
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        })

    }

    async GetClasses() {
        return (await Data.Query(`select title, description from classes`)).rows;
    }

    async GetUnits(class_name: string) {
        return (await Data.Query(
            `select title, description 
                from item 
                inner join item_item_link iil on item.id = iil.item_id_two
                where item_type='unit' 
                and item_id_one=(select id from item where title=$1)`,
            class_name)).rows;
    }

    async GetLessons(unit_name: string) {
        return (await Data.Query(
            `select title, description 
                from item 
                inner join item_item_link iil on item.id = iil.item_id_two
                where item_type='lesson' 
                  and item_id_one=(select id from item where title=$1)`,
            unit_name)).rows;
    }

    async GetLessonPage(lesson_name: string) {
        return (await Data.Query(
            `select i.title as title, i.description as description, p.html as html
            from item i
            inner join page p on i.id = p.item_id
            where item_type='lesson'
            and title=$1`,
            lesson_name
        )).rows;
    }
}