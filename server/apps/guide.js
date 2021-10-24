"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guide = void 0;
const route_1 = require("../routes/route");
const database_1 = require("./database");
class Guide extends route_1.RouteNode {
    constructor() {
        super('guide', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const classes = yield this.GetClasses();
                (0, route_1.RenderPage)(res, 'Guides', 'guide/guide.ejs', { classes: classes });
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500); //TODO: Help this
            }
        }));
    }
    Setup(app, parent_route) {
        super.Setup(app, parent_route);
        //Data Routes
        app.get(`${parent_route}/guide/data/classes/`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetClasses();
                if (data.length > 0) {
                    res.json(data);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        app.get(`${parent_route}/guide/data/classes/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetUnits(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        app.get(`${parent_route}/guide/data/units/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetLessons(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        app.get(`${parent_route}/guide/data/lessons/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetLessonPage(req.params['name']);
                if (data.length > 0) {
                    res.json(data);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        //Page Routes
        app.get(`${parent_route}/guide/classes/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetUnits(req.params['name']);
                if (data.length > 0) {
                    data['name'] = req.params['name'];
                    (0, route_1.RenderPage)(res, req.params['name'], 'guide/class.ejs', { name: req.params['name'], units: data });
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        app.get(`${parent_route}/guide/units/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetLessons(req.params['name']);
                if (data.length > 0) {
                    (0, route_1.RenderPage)(res, req.params['name'], 'guide/unit.ejs', { lessons: data });
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
        app.get(`${parent_route}/guide/lessons/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.GetLessonPage(req.params['name']);
                if (data.length > 0) {
                    let d = { lesson: data[0] };
                    (0, route_1.RenderPage)(res, data[0]['title'], 'guide/lesson.ejs', d);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        }));
    }
    GetClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select title, description from classes`)).rows;
        });
    }
    GetUnits(class_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select title, description 
                from item 
                inner join item_item_link iil on item.id = iil.item_id_two
                where item_type='unit' 
                and item_id_one=(select id from item where title=$1)`, class_name)).rows;
        });
    }
    GetLessons(unit_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select title, description 
                from item 
                inner join item_item_link iil on item.id = iil.item_id_two
                where item_type='lesson' 
                  and item_id_one=(select id from item where title=$1)`, unit_name)).rows;
        });
    }
    GetLessonPage(lesson_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select i.title as title, i.description as description, p.html as html
            from item i
            inner join page p on i.id = p.item_id
            where item_type='lesson'
            and title=$1`, lesson_name)).rows;
        });
    }
}
exports.Guide = Guide;
//# sourceMappingURL=guide.js.map