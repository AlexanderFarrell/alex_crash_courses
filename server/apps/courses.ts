import {RenderPage, RouteNode} from "../routes/route";
import * as e from "express";
import {category_kinds} from "./courses/course_kinds";
import {languages} from "./courses/languages";
import {course_uses} from "./courses/uses";



export class Courses extends RouteNode {
    constructor() {
        super('courses', async (req, res) => {
            RenderPage(res, 'Courses', 'courses/courses.ejs', data);
        });
    }
}

let data = {
    categories: category_kinds,
    languages: languages,
    uses: course_uses
}