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
exports.Clients = void 0;
const route_1 = require("../routes/route");
const database_1 = require("./database");
class Clients extends route_1.RouteNode {
    Setup(app, parent_route) {
        super.Setup(app, parent_route);
        (0, route_1.TryRenderRoute)(app, `${parent_route}/apps/:name`, ['name'], "Unable to retrieve app", 'app/app.ejs', (name) => __awaiter(this, void 0, void 0, function* () {
            return yield this.GetApp(name);
        }), (name) => {
            return name + " - Apps - ";
        });
        (0, route_1.TryRenderRoute)(app, `${parent_route}/games/:name`, ['name'], "Unable to retrieve game.", 'app/app.ejs', (name) => __awaiter(this, void 0, void 0, function* () {
            return yield this.GetApp(name);
        }), (name) => {
            return name + " - Games - ";
        });
        // TryAppDataRoute(
        //     app,
        //     `${parent_route}/apps/:name`,
        //     ['name'],
        //     "Unable to retrieve app",
        //     async (name) => {
        //         return await this.GetApp(name)
        //     });
        //
        // TryAppDataRoute(
        //     app,
        //     `${parent_route}/games/:name`,
        //     ['name'],
        //     "Unable to retrieve game.",
        //     async (name) => {
        //         return await this.GetGame(name)
        //     });
    }
    GetApp(app_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.Data.Query(`
            select i.title as title, i.description as description, p.html as html
            from page p
            inner join item i on i.id = p.item_id
            where i.title = $1
            and i.item_type='app'`, app_name);
        });
    }
    GetGame(app_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.Data.Query(`
            select i.title as title, i.description as description, p.html as html
            from page p
            inner join item i on i.id = p.item_id
            where i.title = $1
            and i.item_type='game'`, app_name);
        });
    }
}
exports.Clients = Clients;
//# sourceMappingURL=clients.js.map