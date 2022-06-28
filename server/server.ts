import {SetupIndexApi} from "./routes";
import {PaServer} from "./PaServer";
import {Publications} from "./apps/publications";
import {NotFound} from "./apps/not_found";
import {Pages} from "./apps/pages";
import {Art} from "./apps/art";

const server = new PaServer();

SetupIndexApi(server.Express);

//server.Start(new Publications());
server.Start(new Art());
server.Start(new Pages());
server.Start(new NotFound());

server.Run();