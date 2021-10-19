"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guide = void 0;
const route_1 = require("../routes/route");
class Guide extends route_1.Page {
    constructor() {
        let guides = [
            ['Welcome', 'Begin your programming journey here!'],
            ['SetUp', 'How to get set up for programming.'],
            ['First', 'Your first program.'],
            ['Variables', 'How do I store & name data?'],
            ['Math', 'How do I perform addition, subtraction, etc.?'],
            ['Comments', 'Can I write text the computer will ignore for my own reference?'],
            //['Console', 'What is a text based program?'],
        ];
        super('guide', guides.map((g, index) => {
            let data = { tutorial: `${g[0].toLowerCase()}.ejs` };
            if (index < guides.length - 1) {
                data['has_next_lesson'] = true;
                data['next_lesson'] = { url: guides[index + 1][0], name: guides[index + 1][0], desc: guides[index + 1][1] };
            }
            else {
                data['has_next_lesson'] = false;
            }
            return new route_1.Page(g[0].toLowerCase(), [], `tutorials/base_tutorial.ejs`, g[0], data);
        }), 'guide.ejs', 'Guides', { tutorials: guides.map(g => {
                return {
                    url: `/courses/guide/${g[0].toLowerCase()}`,
                    name: g[0],
                    desc: g[1]
                };
            }) });
    }
}
exports.Guide = Guide;
// import {Page} from "./app";
//
// class Guide extends Page{
//     public Tags: string[];
//
//     constructor(name: string, tags) {
//         super(name);
//     }
//
//     static Create(name: string, tags: string[]) {
//         return new Guide(name, tags);
//     }
//
//     GetPage() {
//         return Page.Create(
//             this.Name.toLowerCase(),
//             [],
//             this.FilePath,
//             this.Name
//         )
//     }
// }
//
// let guides = [
//     Guide.Create('Variables', ['Fundamentals']),
//     Guide.Create('Comments', ['Fundamentals']),
//     Guide.Create('Console', ['Fundamentals']),
//     Guide.Create('Math', ['Fundamentals']),
// ];
//
// let pages = guides.map(guide => {
//     return guide.GetPage();
// })
//
//# sourceMappingURL=guide.js.map