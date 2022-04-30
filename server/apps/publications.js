"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publications = void 0;
const route_1 = require("../routes/route");
const database_1 = require("./database");
class Publications {
    GetName() {
        return "Publications";
    }
    SetupModule(app) {
    }
    SetupRoutes(app) {
        app.get('/pub', (req, res) => __awaiter(this, void 0, void 0, function* () {
            (0, route_1.RenderPage)(res, 'Pages', 'publications/publications.ejs', { news: yield Publications.GetNews() });
        }));
        app.get(`/pub/:name`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            let name = req.params['name'];
            let publications = yield Publications.GetPublication(name);
            if (publications.length > 0) {
                let data = { pub: publications[0] };
                (0, route_1.RenderPage)(res, publications[0]['title'], 'publications/page.ejs', data);
            }
            else {
                (0, route_1.RenderPage)(res, 'Cannot Find', 'publications/none.ejs', {});
            }
        }));
    }
    static GetPublication(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select i.title as title, i.description as description, p.html as html
            from item i
            inner join page p on i.id = p.item_id
            where item_type='page'
            and title=$1
            limit 1`, name)).rows;
        });
    }
    static GetNews() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select i.title as title, i.description as description, to_char(i.created_on, 'Mon DD, YYYY')  as date
            from item i
            inner join page p on i.id = p.item_id
            where item_type='page'
            order by i.created_on
            limit 3`)).rows;
        });
    }
}
exports.Publications = Publications;
//# sourceMappingURL=publications.js.map