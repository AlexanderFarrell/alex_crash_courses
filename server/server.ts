import * as express from 'express';
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from 'morgan';
import {SetupIndexApi} from "./routes";
// import sslRedirect from "heroku-ssl-redirect";
import * as helmet from 'helmet';
import * as enforce from 'express-sslify';

const server = express();

const port = process.env.PORT || 3000;

// view engine setup
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '../public')));
server.use(helmet())
server.use(enforce.HTTPS({trustProtoHeader: true;}))

SetupIndexApi(server);

// if (port != 3000) {
//     server.use((req, res, next) => {
//         if (req.header('x-forwarded-proto') !== 'https')
//             res.redirect(`https://${req.header('host')}${req.url}`)
//         else
//             next()
//     })
// }

server.use((req, res, next) => {
    res.render('template', { title: 'Not Found' + " - Alexander Farrell", content: 'pages/not_found.ejs'})
})

// server.use(sslRedirect());

server.listen(port, () => {
    console.log(`Listening on ${port}`);
    console.log(`View at localhost:${port} if local.`);
})

module.exports = server;