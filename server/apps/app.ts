// import {Router} from "express";
//
// export abstract class App {
//     public Name: string;
//     public PagesPath: string;
//     public Pages: Page[] = [];
//
//     abstract GetName(): string;
//     abstract GetIndexPage(): Page;
//     abstract GetRouter(): Router;
// }
//
// export class Page {
//     public Name: string;
//     public Url: string;
//     public FilePath: string;
//     public Title: string;
//     public Pages: Page[];
//
//     constructor(name, url=name.toLowerCase(), pages=[], title=name) {
//         this.Name = name;
//         this.Url = url;
//         this.FilePath = `${name.toLowerCase()}.ejs`;
//         this.Title = title;
//         this.Pages = pages;
//     }
//
//     static Create(name, pages=[], route=`${name.toLowerCase()}`, title=name) {
//         return new Page(name, route, pages, title);
//     }
//
//     AddToRoute(router: Router, parent_route = '', data={}) {
//         let url = `${parent_route}/${this.Url}`;
//         router.get(url, (req, res) => {
//             RenderView(res, this.Title, this.FilePath, data);
//         })
//
//         this.Pages.forEach(page => {
//             page.AddToRoute(router);
//         })
//     }
// }
//
// export function RenderView(res, title, filePath, data = {}) {
//     data['title'] = title;
//     data['content'] = filePath;
//
//     res.render('template', data);
// }