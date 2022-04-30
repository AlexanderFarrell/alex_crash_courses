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
exports.Courses = void 0;
const route_1 = require("../routes/route");
const course_kinds_1 = require("./courses/course_kinds");
const languages_1 = require("./courses/languages");
const uses_1 = require("./courses/uses");
class Courses extends route_1.RouteNode {
    constructor() {
        super('courses', (req, res) => __awaiter(this, void 0, void 0, function* () {
            (0, route_1.RenderPage)(res, 'Courses', 'courses/courses.ejs', data);
        }));
    }
}
exports.Courses = Courses;
let data = {
    categories: course_kinds_1.category_kinds,
    languages: languages_1.languages,
    uses: uses_1.course_uses
};
//# sourceMappingURL=courses.js.map