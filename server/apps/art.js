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
exports.Art = void 0;
const route_1 = require("../routes/route");
const database_1 = require("./database");
class Art {
    GetName() {
        return "Art";
    }
    SetupModule(app) {
    }
    SetupRoutes(app) {
        app.get('/art', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let collections = yield this.GetCollections();
            (0, route_1.RenderPage)(res, 'Art', 'art.ejs', { collections });
        }));
    }
    GetCollections() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield database_1.Data.Query(`select * from collection limit 100`)).rows;
        });
    }
}
exports.Art = Art;
//# sourceMappingURL=art.js.map