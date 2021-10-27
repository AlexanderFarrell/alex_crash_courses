import {SetupIndexApi} from "./routes";
import {PaServer} from "./PaServer";

const server = new PaServer();

SetupIndexApi(server.Express);

server.Use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs'})
})

server.Run();