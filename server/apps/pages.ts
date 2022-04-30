import {App} from "./app";
import * as express from 'express';
import * as path from "path";
import * as fs from "fs";
import {NotFound} from "./not_found";
import {RenderPage} from "../routes/route";

const pages_route = '../views/pages/';

function ToTitleCase(input: string): string {
    let output: string = "";
    let capitalize: boolean = true;

    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        output += (capitalize) ? c.toUpperCase() : c;
        capitalize = (c === " ");
    }

    return output;
}

export class Pages implements App {
    GetName(): string {
        return "Pages";
    }

    SetupModule(app: express.Application) {

    }

    SetupRoutes(app: express.Application) {
        app.get('/r/:title', async (req, res) => {
            //Gets the title and sanitizes any up folder commands out.
            let title = req.params['title'].replace('..', '');
            if (title.length < 100) {
                let file = title + '.ejs';
                const path_file = pages_route + file;
                console.log(path_file)
                if (fs.existsSync(path.resolve(__dirname, path_file))) {
                    console.log("Exists");
                    RenderPage(res, ToTitleCase(title), path_file)
                } else {
                    console.log("Does not Exists");
                    NotFound.RenderNotFound(res);
                }
            } else {
                console.log("Does not Exists");
                NotFound.RenderNotFound(res);
            }
        })

        app.get('/r', async (req, res) => {
            res.redirect('/');
        })
    }
}