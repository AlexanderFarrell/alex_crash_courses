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
exports.Pages = void 0;
const path = require("path");
const fs = require("fs");
const not_found_1 = require("./not_found");
const route_1 = require("../routes/route");
const pages_route = '../views/pages/';
function ToTitleCase(input) {
    let output = "";
    let capitalize = true;
    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        output += (capitalize) ? c.toUpperCase() : c;
        capitalize = (c === " ");
    }
    return output;
}
class Pages {
    GetName() {
        return "Pages";
    }
    SetupModule(app) {
    }
    SetupRoutes(app) {
        app.get('/r/:title', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //Gets the title and sanitizes any up folder commands out.
            let title = req.params['title'].replace('..', '');
            if (title.length < 100) {
                let file = title + '.ejs';
                const path_file = pages_route + file;
                console.log(path_file);
                if (fs.existsSync(path.resolve(__dirname, path_file))) {
                    console.log("Exists");
                    (0, route_1.RenderPage)(res, ToTitleCase(title.replace('_', " ")), path_file);
                }
                else {
                    console.log("Does not Exists");
                    not_found_1.NotFound.RenderNotFound(res);
                }
            }
            else {
                console.log("Does not Exists");
                not_found_1.NotFound.RenderNotFound(res);
            }
        }));
        app.get('/r', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.redirect('/');
        }));
    }
}
exports.Pages = Pages;
//# sourceMappingURL=pages.js.map