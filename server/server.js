"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PaServer_1 = require("./PaServer");
const not_found_1 = require("./apps/not_found");
const pages_1 = require("./apps/pages");
const server = new PaServer_1.PaServer();
(0, routes_1.SetupIndexApi)(server.Express);
//server.Start(new Publications());
server.Start(new pages_1.Pages());
server.Start(new not_found_1.NotFound());
server.Run();
//# sourceMappingURL=server.js.map