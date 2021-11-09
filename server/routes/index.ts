import {Application} from "express";
import {Page, SetupRouteGraph} from "./route";
import {Guide} from "../apps/guide";
import {languages_available} from "../apps/languages_available";

const api_graph = new Page('', [
    new Page('Courses', [
        new Page("Prepare"),
        new Page("Languages"),
        new Page("Ideas"),
        new Page("Curriculum"),
        new Guide(),
        new Page("Philosophy")
    ], 'courses_o.ejs', 'Courses', {
        languages: languages_available
    }),
    new Page("Articles"),
    new Page("Work", [
        new Page("Ordered_Energy"),
        new Page("Raise_Triton"),
        new Page("Buried_Peace"),
        new Page("Void Money"),
        new Page("Space"),
        new Page("Fractals")
    ]),
    new Page("About"),
    new Page("Privacy"),
    new Page("Terms")

], 'home.ejs', 'Home')

export function SetupIndexApi(app: Application) {
    SetupRouteGraph(app, api_graph);
}