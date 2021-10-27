"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PaServer_1 = require("./PaServer");
const server = new PaServer_1.PaServer();
(0, routes_1.SetupIndexApi)(server.Express);
server.Use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs' });
});
server.Run();
//# sourceMappingURL=server.js.map