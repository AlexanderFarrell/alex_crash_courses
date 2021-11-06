"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PaServer_1 = require("./PaServer");
const publications_1 = require("./apps/publications");
const not_found_1 = require("./apps/not_found");
const server = new PaServer_1.PaServer();
(0, routes_1.SetupIndexApi)(server.Express);
server.Start(new publications_1.Publications());
server.Start(new not_found_1.NotFound());
server.Run();
//# sourceMappingURL=server.js.map