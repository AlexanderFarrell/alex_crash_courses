"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIndexApi = void 0;
const route_1 = require("./route");
const guide_1 = require("../apps/guide");
const graph = new route_1.Page('', [
    new route_1.Page('Courses', [
        new route_1.Page("Prepare"),
        new route_1.Page("Languages"),
        new route_1.Page("Ideas"),
        new route_1.Page("Curriculum"),
        new guide_1.Guide(),
        new route_1.Page("Philosophy")
    ]),
    new route_1.Page("Articles"),
    new route_1.Page("Work", [
        new route_1.Page("Ordered_Energy"),
        new route_1.Page("Raise_Triton"),
        new route_1.Page("Buried_Peace"),
        new route_1.Page("Void Money")
    ]),
    new route_1.Page("About"),
    new route_1.Page("Privacy"),
    new route_1.Page("Terms")
], 'home.ejs', 'Home');
function SetupIndexApi(app) {
    (0, route_1.SetupRouteGraph)(app, graph);
}
exports.SetupIndexApi = SetupIndexApi;
// const express = require('express');
//
// const router = express.Router();
//
// // const home = Page.Create("Home", [
// //     Page.Create("Courses", [
// //         Page.Create("Prepare"),
// //         Page.Create("Languages"),
// //         Page.Create("Ideas"),
// //         Page.Create("Curriculum"),
// //         Page.Create("Tutorials"),
// //         Page.Create("Philosophy"),
// //         Page.Create("one_hour", [], "one_hour", "One Hour Course"),
// //         Page.Create("two_hour", [], "two_hour", "Two Hour Course")
// //     ]),
// //     Page.Create("Articles"),
// //     Page.Create("Work", [
// //         Page.Create("Ordered_Energy"),
// //         Page.Create("Raise_Triton"),
// //         Page.Create("Buried_Peace"),
// //         Page.Create("Void_Money")
// //     ]),
// //     Page.Create("About"),
// //     Page.Create("Privacy"),
// //     Page.Create("Terms")
// // ], '');
//
// home.FilePath = `category/${home.FilePath}`;
//
// home.AddToRoute(router);
// add_route(router, home.Url, home.Title, `index/${home.FilePath}`);
//
// home.Pages.forEach(c => {
//     add_page(router, c)
//   //add_route(router, c.Path, c.Title, `index/${c.Content}`);
// })
// module.exports = router;
//# sourceMappingURL=index.js.map