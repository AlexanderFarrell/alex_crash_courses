import {Application} from "express/ts4.0";

export class RouteNode {
    public Id: string;
    public On: (req, res) => void;
    public SubNodes: RouteNode[];

    constructor(Id: string, On: (req, res) => void, SubNodes: RouteNode[] = []) {
        this.Id = Id;
        this.On = On;
        this.SubNodes = SubNodes;
    }

    Setup(app: Application, parent_route: string) {
        let route = `${parent_route}/${this.Id}`;
        app.get(route, this.On);

        this.SubNodes.forEach(n => {
            n.Setup(app, (route == '/') ? '' : route);
        })
    }
}

export class Page extends RouteNode {
    public FilePath: string;

    constructor(id: string, SubNodes: RouteNode[] = [], fileName: string = `${id.toLowerCase()}.ejs`, title: string = id, data={}) {
        super(id.toLowerCase(), ((req, res) => {
            data['title'] = title
            data['content'] = fileName;
            res.render('template', data);
        }), SubNodes);
    }
}

// function (id: string, on: (req, res) => {}, subNodes: RouteNode[] = []) {
//
// }

export function SetupRouteGraph(app: Application, graph: RouteNode) {
    graph.Setup(app, '');
}

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