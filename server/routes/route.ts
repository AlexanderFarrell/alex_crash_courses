import {Application} from "express/ts4.0";

export async function TryRoute(res, on_error_message, f) {
    try {
        res.json(await f());
    } catch (e) {
        res.status(500).json({message: on_error_message});
    }
}

export async function TryDataRoute(res, on_error_message, f) {
    try {
        let data = await f();
        if (data.length > 0) {
            res.json(data);
        } else {
            res.sendStatus(404);
        }
        res.json(await f());
    } catch (e) {
        res.status(500).json({message: on_error_message});
    }
}

export function TryRenderRoute(app, url, params, on_error, content, f, title_f) {
    app.get(url, async (req, res) => {
        try {
            let parameters = params.map(p => {return req.params[p]})
            let data = await f(...parameters);
            if (data.length > 0) {
                let title = title_f(...parameters);
                RenderPage(res, title, content, data);
            } else {
                res.sendStatus(404);
            }
            res.json(await f());
        } catch (e) {
            res.status(500).json({message: on_error});
        }
    })
}

export function TryAppDataRoute(app, url, params, on_error_message, f) {
    app.get(url, async (req, res) => {
        try {
            let data = await f(...(params.map(p => {return req.params[p]})));
            if (data.length > 0) {
                res.json(data);
            } else {
                res.sendStatus(404);
            }
            res.json(await f());
        } catch (e) {
            res.status(500).json({message: on_error_message});
        }
    })
}

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

export function RenderPage(res, title: string, page: string, data) {
    data['title'] = title + ' - Alexander Farrell';
    data['content'] = page;
    res.render('template', data)
}

export class Page extends RouteNode {
    public FilePath: string;

    constructor(id: string, SubNodes: RouteNode[] = [], fileName: string = `${id.toLowerCase()}.ejs`, title: string = id, data={}) {
        super(id.toLowerCase(), ((req, res) => {
            data['title'] = title + ' - Alexander Farrell';
            data['content'] = fileName;
            res.render('template', data);
        }), SubNodes);
    }
}

export function SetupRouteGraph(app: Application, graph: RouteNode) {
    graph.Setup(app, '');
}