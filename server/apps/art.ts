import {RenderPage, RouteNode} from "../routes/route";


export class Courses extends RouteNode {
    constructor() {
        super('courses', async (req, res) => {
            RenderPage(res, 'Courses', 'art.ejs', data);
        });
    }
}

let data = {}