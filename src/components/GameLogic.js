import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
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

  const movePiece = (startx, starty, endx, endy) => {
    const newPiecePosition = [...piecePosition];

    newPiecePosition[endx][endy].piece = newPiecePosition[startx][starty].piece;
    newPiecePosition[startx][starty].piece = "";

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
        (piecePosition[r][c] !== "" && piecePosition[r][c].piece[0] !== color)
      ) {
        const { x, y } = selectedPosition;
        movePiece(x, y, r, c);
      }
      return;
    }

    if (
      piecePosition[r][c].piece[0] === color &&
      piecePosition[r][c].selected
    ) {
      clearSelection();
      return;
    } else if (
      piecePosition[r][c].piece[0] === color &&
      piecePosition[r][c].selected
    ) {
      clearSelection();
      return;
    }

    if (piecePosition[r][c].piece[0] !== color) {
      return;
    } else if (piecePosition[r][c].piece[0] !== color) {
      return;
    }
    clearSelection();

    const newPiecePosition = [...piecePosition];

    const piece = newPiecePosition[r][c].piece;

    calculateMovements(id, piece.substring(2, piece.length));

    setPiecePosition(newPiecePosition);
  };
  return (
    <Container>
      <Game piecePosition={piecePosition} positionClicked={positionClicked} />
    </Container>
  );
}

export default GameLogic;
