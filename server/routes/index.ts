import {Application} from "express";
import {Page, SetupRouteGraph} from "./route";
import {Guide} from "../apps/guide";
import {languages_available} from "../apps/languages_available";
import {Courses} from "../apps/courses";

const api_graph = new Page('', [
    /*new Page('Courses', [
        new Page("Languages", [

        ], "courses/by_language.ejs", "Courses by Language", {}),
        new Page("Topics", [

        ], 'courses/by_topic.ejs', "Courses by Topic", {}),
        new Page("Tutoring", [], 'courses/tutoring/ejs', 'Tutoring', {}),
        new Page("Consultation", [],
            'courses/consultation.ejs', "Consultation", {}),
        new Page("Prepare"),
        new Page("Languages"),
        new Page("Ideas"),
        new Page("Curriculum"),
        new Guide(),
        new Page("Philosophy")
    ], 'courses/courses.ejs', 'Courses', {
        languages: languages_available
    })*/
    new Guide(),
    new Courses(),
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