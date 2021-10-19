"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupRouteGraph = exports.Page = exports.RouteNode = void 0;
class RouteNode {
    constructor(Id, On, SubNodes = []) {
        this.Id = Id;
        this.On = On;
        this.SubNodes = SubNodes;
    }
    Setup(app, parent_route) {
        let route = `${parent_route}/${this.Id}`;
        app.get(route, this.On);
        this.SubNodes.forEach(n => {
            n.Setup(app, (route == '/') ? '' : route);
        });
    }
}
exports.RouteNode = RouteNode;
class Page extends RouteNode {
    constructor(id, SubNodes = [], fileName = `${id.toLowerCase()}.ejs`, title = id, data = {}) {
        super(id.toLowerCase(), ((req, res) => {
            data['title'] = title;
            data['content'] = fileName;
            res.render('template', data);
        }), SubNodes);
    }
}
exports.Page = Page;
// function (id: string, on: (req, res) => {}, subNodes: RouteNode[] = []) {
//
// }
function SetupRouteGraph(app, graph) {
    graph.Setup(app, '');
}
exports.SetupRouteGraph = SetupRouteGraph;
// const {Page} = require("../server/apps/app");
//
// function add_route(router, path, page_title, page_path, data = {}){
//     router.get(path, (req, res) => {
//         console.log(page_path);
//         data['title'] = page_title + " - Alexander Farrell";
//         data['content'] = page_path;
//         res.render('template', { title: page_title + " - Alexander Farrell", content: page_path})
//     })
// }
//
// function add_page(router, page, parent_route = '') {
//     let route = `${parent_route}/${page.Path}`
//     add_route(router, route, page.Title, `index/${page.Content}`);
//
//     page.Pages.forEach(subpage => {
//         add_page(router, subpage, route);
//     })
// }
//
// module.exports = {add_route, add_page};
// import {Application} from "express";
//
// function BuildRoutes(app: Application, home: RouteProvider) {
//
// }
//
// interface RouteProvider {
//     GetLocalUrl(): string;
//
// }
//
// interface FileProvider {
//     GetLocalFilePath(): string;
// }
//
// interface ContentProvider<T> {
//     GetContent(): T;
// }
// interface Named {
//     GetName(): string;
// }
//
// class Page implements RouteProvider, FileProvider, Named {
//     public Name: string;
//
//     constructor(Name: string) {
//         this.Name = Name;
//     }
//
//     GetLocalFilePath(): string {
//         return this.Name.replace(/ /g,"_").toLowerCase() + '.ejs';
//     }
//
//     GetLocalUrl(): string {
//         return this.Name.replace(/ /g,"_").toLowerCase();
//     }
//
//     GetName(): string {
//         return this.Name;
//     }
// }
//# sourceMappingURL=route.js.map