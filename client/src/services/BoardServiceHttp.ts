import axios from "axios";
import Board from "../entities/Board";
import BoardService from "./BoardService";

export default class BoardServiceHttp implements BoardService {
  async getBoard(idBoard: number): Promise<Board> {
    const response = await axios({
      url: `http://localhost:3000/boards/${idBoard}`,
      method: "get",
    });
    const boardData = response.data;
    const board = new Board(boardData.name);
    for (const columnData of boardData.columns) {
      board.addColumn(columnData.name, columnData.estimative);
      for (const cardData of columnData.cards) {
        board.addCard(columnData.name, cardData.title, cardData.estimative);
      }
    }
    return board;
  }
}