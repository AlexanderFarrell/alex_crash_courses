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
exports.SetupDatabaseProduction = exports.SetupDatabaseDevelopment = exports.Data = void 0;
const pg_1 = require("pg");
exports.Data = null;
function SetupDatabaseDevelopment(config) {
    exports.Data = new Database(Database.ConstructUri(config.database.username, config.database.password, config.database.host, config.database.port, config.database.database));
}
exports.SetupDatabaseDevelopment = SetupDatabaseDevelopment;
function SetupDatabaseProduction() {
    exports.Data = new Database(process.env.DATABASE_URL);
}
exports.SetupDatabaseProduction = SetupDatabaseProduction;
class Database {
    constructor(url) {
        // this.Pool = new Pool({
        //     user: process.env.DATABASE_USERNAME || config.database.username,
        //     password:process.env.DATABASE_PASSWORD || config.database.password,
        //     host: process.env.DATABASE_HOST || config.database.host,
        //     port: process.env.DATABASE_PORT || config.database.port,
        //     database: process.env.DATABASE_DATABASE || config.database.database
        // })
        this.Pool = new pg_1.Pool({
            connectionString: url
        });
    }
    static ConstructUri(username, password, host, port, database) {
        return `postgres://${username}:${password}@${host}:${port}/${database}`;
    }
    TryGet(res, error_message = "Error retrieving data from server.", sql, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json((yield this.Query(sql, args)).rows);
            }
            catch (e) {
                res.status(500).json({ message: error_message });
            }
        });
    }
    TrySet(res, error_message = "Error sending data to server.", sql, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.Execute(sql, args);
                res.sendStatus(200);
            }
            catch (e) {
                res.status(500).json({ message: error_message });
            }
        });
    }
    Query(sql, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Pool.query(sql, args);
            }
            catch (e) {
                console.error("Database Error: " + e.message);
                throw new Error("Unable to retrieve data from database");
            }
        });
    }
    Execute(sql, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.Pool.query(sql, args);
            }
            catch (e) {
                console.error("Database Error: " + e.message);
                throw new Error("Unable to retrieve data from database");
            }
        });
    }
}
//# sourceMappingURL=database.js.map