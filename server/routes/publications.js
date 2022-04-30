"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUpPublicationsRouter = void 0;
const route_1 = require("./route");
function SetUpPublicationsRouter(app) {
    app.get('/pub', (req, res) => {
        (0, route_1.RenderPage)(res, 'Publications', 'publications/publications.ejs', {});
    });
    app.get('/pub/:name', (req, res) => {
        let name = req.params['name'];
    });
}
exports.SetUpPublicationsRouter = SetUpPublicationsRouter;
//# sourceMappingURL=publications.js.map