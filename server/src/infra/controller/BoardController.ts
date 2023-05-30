import BoardRepository from "../../domain/repository/BoardRepository";
import CardRepository from "../../domain/repository/CardRepository";
import ColumnRepository from "../../domain/repository/ColumnRepository";
import BoardService from "../../service/BoardService";
import CardService from "../../service/CardService";
import ColumnService from "../../service/ColumnService";
import Connection from "../database/Connection";
import Http from "../http/Http";
import BoardRepositoryDatabase from "../repository/BoardRepositoryDatabase";
import CardRepositoryDatabase from "../repository/CardRepositoryDatabase";
import ColumnRepositoryDatabase from "../repository/ColumnRepositoryDatabase";

export default class BoardController {
  constructor(readonly http: Http, readonly connection: Connection, readonly boardRepository: BoardRepository,
    readonly columnRepository: ColumnRepository,
    readonly cardRepository: CardRepository) {
    http.route("get", "/boards", async function (params: any, body: any) {
      const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
      const boards = await boardService.getBoards();
      return boards;
    });

    http.route("get", "/boards/:idBoard", async function (params: any, body: any) {
      const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
      const boards = await boardService.getBoard(params.idBoard);
      return boards;
    });

    http.route(
      "get",
      "/boards/:idBoard/columns",
      async function (params: any, body: any) {
        const columnService = new ColumnService(columnRepository);
        const columns = await columnService.getColumns(
          parseInt(params.idBoard)
        );
        return columns;
      }
    );

    http.route(
      "get",
      "/boards/:idBoard/columns/:idColumn/cards",
      async function (params: any, body: any) {
        const cardService = new CardService(cardRepository);
        const cards = await cardService.getCards(parseInt(params.idColumn));
        return cards;
      }
    );
  }
}
