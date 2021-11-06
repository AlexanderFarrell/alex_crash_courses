import {Application} from "express";

export interface App {
    GetName(): string;
    SetupModule(app: Application);
    SetupRoutes(app: Application);
}