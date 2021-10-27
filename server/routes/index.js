"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIndexApi = void 0;
const route_1 = require("./route");
const guide_1 = require("../apps/guide");
const languages_available_1 = require("../apps/languages_available");
const api_graph = new route_1.Page('', [
    new route_1.Page('Courses', [
        new route_1.Page("Prepare"),
        new route_1.Page("Languages"),
        new route_1.Page("Ideas"),
        new route_1.Page("Curriculum"),
        new guide_1.Guide(),
        new route_1.Page("Philosophy")
    ], 'courses.ejs', 'Courses', {
        languages: languages_available_1.languages_available
    }),
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