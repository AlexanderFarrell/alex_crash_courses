import {RenderPage, RouteNode} from "../routes/route";

export class Home extends RouteNode {
    constructor() {
        super('courses', async (req, res) => {
            RenderPage(res, 'Courses', 'courses/courses_nn.ejs', data);
        });
    }
}