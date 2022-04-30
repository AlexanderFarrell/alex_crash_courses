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
exports.SetupRouteGraph = exports.Page = exports.RenderPage = exports.RouteNode = exports.TryAppDataRoute = exports.TryRenderRoute = exports.TryDataRoute = exports.TryRoute = void 0;
function TryRoute(res, on_error_message, f) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.json(yield f());
        }
        catch (e) {
            res.status(500).json({ message: on_error_message });
        }
    });
}
exports.TryRoute = TryRoute;
function TryDataRoute(res, on_error_message, f) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield f();
            if (data.length > 0) {
                res.json(data);
            }
            else {
                res.sendStatus(404);
            }
            res.json(yield f());
        }
        catch (e) {
            res.status(500).json({ message: on_error_message });
        }
    });
}
exports.TryDataRoute = TryDataRoute;
function TryRenderRoute(app, url, params, on_error, content, f, title_f) {
    app.get(url, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let parameters = params.map(p => { return req.params[p]; });
            let data = yield f(...parameters);
            if (data.length > 0) {
                let title = title_f(...parameters);
                RenderPage(res, title, content, data);
            }
            else {
                res.sendStatus(404);
            }
            res.json(yield f());
        }
        catch (e) {
            res.status(500).json({ message: on_error });
        }
    }));
}
exports.TryRenderRoute = TryRenderRoute;
function TryAppDataRoute(app, url, params, on_error_message, f) {
    app.get(url, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield f(...(params.map(p => { return req.params[p]; })));
            if (data.length > 0) {
                res.json(data);
            }
            else {
                res.sendStatus(404);
            }
            res.json(yield f());
        }
        catch (e) {
            res.status(500).json({ message: on_error_message });
        }
    }));
}
exports.TryAppDataRoute = TryAppDataRoute;
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
function RenderPage(res, title, page, data = {}) {
    data['title'] = title + ' - Alexander Farrell';
    data['content'] = page;
    res.render('template', data);
}
exports.RenderPage = RenderPage;
class Page extends RouteNode {
    constructor(id, SubNodes = [], fileName = `${id.toLowerCase()}.ejs`, title = id, data = {}) {
        super(id.toLowerCase(), ((req, res) => {
            data['title'] = title + ' - Alexander Farrell';
            data['content'] = fileName;
            res.render('template', data);
        }), SubNodes);
    }
}
exports.Page = Page;
function SetupRouteGraph(app, graph) {
    graph.Setup(app, '');
}
exports.SetupRouteGraph = SetupRouteGraph;
//# sourceMappingURL=route.js.map