import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "../../../node_modules/@lourenci/react-kanban/dist/styles.css";

const initialBoard = {
  columns: [
    {
      id: 1,
      title: "To-Do",
      cards: [
        {
          id: 1,
          title: "Have post",
          description: "a thing",
        },
        {
          id: 2,
          title: "Move it",
          description: "edit priority",
        },
        {
          id: 3,
          title: "Remove it",
          description: "delete stuff.",
        },
        {
          id: 4,
          title: "create new",
          description: "add stuff",
        },
      ],
    },
  ],
};

function MyBoard() {
  const [board, setBoard] = useState(initialBoard);

  function onCardMove(card, source, destination) {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);

    console.log("----------");
    console.log(card);
    console.log(source);
    console.log(destination);
    console.log(updatedBoard);
  }

  return (
    <Board onCardDragEnd={onCardMove} disableColumnDrag>
      {board}
    </Board>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyBoard />, rootElement);

export default MyBoard;
