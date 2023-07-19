import React from "react";
import Game from "./Game";

function GameLogic(props) {
  const {
    piecePosition,
    setPiecePosition,
    calculateMovements,
    color,
    setColor,
    selectedPosition,
    setSelectedPosition,
    kingChecker,
  } = props;

  const clearSelection = () => {
    const newPiecePosition = [...piecePosition];

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newPiecePosition[i][j].selected = false;
      }
    }
    setPiecePosition(newPiecePosition);
    setSelectedPosition({});
  };

  const movePiece = (startx, starty, endx, endy, deletedPiece = "") => {
    const newPiecePosition = [...piecePosition];

    newPiecePosition[endx][endy].piece = newPiecePosition[startx][starty].piece;
    newPiecePosition[startx][starty].piece = deletedPiece;

    setPiecePosition(newPiecePosition);
    clearSelection();
  };

  const positionClicked = (id, r, c) => {
    if (piecePosition[r][c].piece === "" && !piecePosition[r][c].selected) {
      clearSelection();
      return;
    }
    if (piecePosition[r][c].selected) {
      if (
        piecePosition[r][c].piece === "" ||
        (piecePosition[r][c].piece !== "" &&
          piecePosition[r][c].piece[0] !== color)
      ) {
        const { x, y } = selectedPosition;
        const deletedPiece = piecePosition[r][c].piece;
        movePiece(x, y, r, c);
        if (!kingChecker()) {
          movePiece(r, c, x, y, deletedPiece);
        }
      }
      return;
    }

    if (
      piecePosition[r][c].piece[0] === color &&
      piecePosition[r][c].selected
    ) {
      clearSelection();
      return;
    }
    // else if (
    //   piecePosition[r][c].piece[0] === color &&
    //   piecePosition[r][c].selected
    // ) {
    //   clearSelection();
    //   return;
    // }

    if (piecePosition[r][c].piece[0] !== color) {
      return;
    }
    // else if (piecePosition[r][c].piece[0] !== color) {
    //   return;
    // }
    clearSelection();

    const newPiecePosition = [...piecePosition];

    const piece = newPiecePosition[r][c].piece;

    calculateMovements(id, piece.substring(2, piece.length));

    setPiecePosition(newPiecePosition);
  };
  return (
    <div className="container mx-auto">
      <Game piecePosition={piecePosition} positionClicked={positionClicked} />
    </div>
  );
}

export default GameLogic;
