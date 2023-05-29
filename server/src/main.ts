import BoardController from "./infra/controller/BoardController";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import CardRepositoryDatabase from "./infra/repository/CardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";

const connection = new PgPromiseConnection();
const http = new ExpressAdapter();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);
new BoardController(http, connection, boardRepository, columnRepository, cardRepository);
http.listen(3000);
