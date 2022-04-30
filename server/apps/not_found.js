"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound {
    GetName() {
        return "Not Found Router";
    }
    SetupModule(app) {
    }
    SetupRoutes(app) {
        app.use((req, res, next) => {
            NotFound.RenderNotFound(res);
        });
    }
    static RenderNotFound(res) {
        res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs' });
    }
}
exports.NotFound = NotFound;
//# sourceMappingURL=not_found.js.map