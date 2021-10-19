
import {Application} from "express";
import {Page, SetupRouteGraph} from "./route";
import {Guide} from "../server/apps/guide";

const graph = new Page('', [
    new Page('Courses', [
        new Page("Prepare"),
        new Page("Languages"),
        new Page("Ideas"),
        new Page("Curriculum"),
        new Guide(),
        new Page("Philosophy")
    ]),
    new Page("Articles"),
    new Page("Work", [
        new Page("Ordered_Energy"),
        new Page("Raise_Triton"),
        new Page("Buried_Peace"),
        new Page("Void Money")
    ]),
    new Page("About"),
    new Page("Privacy"),
    new Page("Terms")

], 'home.ejs', 'Home')

export function SetupIndexApi(app: Application) {
    SetupRouteGraph(app, graph);
}

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
