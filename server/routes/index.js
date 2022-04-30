"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIndexApi = void 0;
const route_1 = require("./route");
const guide_1 = require("../apps/guide");
const courses_1 = require("../apps/courses");
const api_graph = new route_1.Page('', [
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
    new guide_1.Guide(),
    new courses_1.Courses(),
    new route_1.Page("Articles"),
    new route_1.Page("Work", [
        new route_1.Page("Ordered_Energy"),
        new route_1.Page("Raise_Triton"),
        new route_1.Page("Buried_Peace"),
        new route_1.Page("Void Money"),
        new route_1.Page("Space"),
        new route_1.Page("Fractals")
    ]),
    new route_1.Page("About"),
    new route_1.Page("Privacy"),
    new route_1.Page("Terms")
], 'home.ejs', 'Home');
function SetupIndexApi(app) {
    (0, route_1.SetupRouteGraph)(app, api_graph);
}
exports.SetupIndexApi = SetupIndexApi;
//# sourceMappingURL=index.js.map