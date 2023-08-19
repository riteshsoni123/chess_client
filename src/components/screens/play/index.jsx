import React, { useState } from "react";
import GameLogic from "./GameLogic";

function Play(props) {
  const { username } = props;
  const defaultPiecePosition = [
    [
      { id: "a8", selected: false, white: true, piece: "b_rook" },
      { id: "b8", selected: false, white: false, piece: "b_knight" },
      { id: "c8", selected: false, white: true, piece: "b_bishop" },
      { id: "d8", selected: false, white: false, piece: "b_queen" },
      { id: "e8", selected: false, white: true, piece: "b_king" },
      { id: "f8", selected: false, white: false, piece: "b_bishop" },
      { id: "g8", selected: false, white: true, piece: "b_knight" },
      { id: "h8", selected: false, white: false, piece: "b_rook" },
    ],
    [
      { id: "a7", selected: false, white: false, piece: "b_pawn" },
      { id: "b7", selected: false, white: true, piece: "b_pawn" },
      { id: "c7", selected: false, white: false, piece: "b_pawn" },
      { id: "d7", selected: false, white: true, piece: "b_pawn" },
      { id: "e7", selected: false, white: false, piece: "b_pawn" },
      { id: "f7", selected: false, white: true, piece: "b_pawn" },
      { id: "g7", selected: false, white: false, piece: "b_pawn" },
      { id: "h7", selected: false, white: true, piece: "b_pawn" },
    ],
    [
      { id: "a6", selected: false, white: true, piece: "" },
      { id: "b6", selected: false, white: false, piece: "" },
      { id: "c6", selected: false, white: true, piece: "" },
      { id: "d6", selected: false, white: false, piece: "" },
      { id: "e6", selected: false, white: true, piece: "" },
      { id: "f6", selected: false, white: false, piece: "" },
      { id: "g6", selected: false, white: true, piece: "" },
      { id: "h6", selected: false, white: false, piece: "" },
    ],
    [
      { id: "a5", selected: false, white: false, piece: "" },
      { id: "b5", selected: false, white: true, piece: "" },
      { id: "c5", selected: false, white: false, piece: "" },
      { id: "d5", selected: false, white: true, piece: "" },
      { id: "e5", selected: false, white: false, piece: "" },
      { id: "f5", selected: false, white: true, piece: "" },
      { id: "g5", selected: false, white: false, piece: "" },
      { id: "h5", selected: false, white: true, piece: "" },
    ],
    [
      { id: "a4", selected: false, white: true, piece: "" },
      { id: "b4", selected: false, white: false, piece: "" },
      { id: "c4", selected: false, white: true, piece: "" },
      { id: "d4", selected: false, white: false, piece: "" },
      { id: "e4", selected: false, white: true, piece: "" },
      { id: "f4", selected: false, white: false, piece: "" },
      { id: "g4", selected: false, white: true, piece: "" },
      { id: "h4", selected: false, white: false, piece: "" },
    ],
    [
      { id: "a3", selected: false, white: false, piece: "" },
      { id: "b3", selected: false, white: true, piece: "" },
      { id: "c3", selected: false, white: false, piece: "" },
      { id: "d3", selected: false, white: true, piece: "" },
      { id: "e3", selected: false, white: false, piece: "" },
      { id: "f3", selected: false, white: true, piece: "" },
      { id: "g3", selected: false, white: false, piece: "" },
      { id: "h3", selected: false, white: true, piece: "" },
    ],
    [
      { id: "a2", selected: false, white: true, piece: "w_pawn" },
      { id: "b2", selected: false, white: false, piece: "w_pawn" },
      { id: "c2", selected: false, white: true, piece: "w_pawn" },
      { id: "d2", selected: false, white: false, piece: "w_pawn" },
      { id: "e2", selected: false, white: true, piece: "w_pawn" },
      { id: "f2", selected: false, white: false, piece: "w_pawn" },
      { id: "g2", selected: false, white: true, piece: "w_pawn" },
      { id: "h2", selected: false, white: false, piece: "w_pawn" },
    ],
    [
      { id: "a1", selected: false, white: false, piece: "w_rook" },
      { id: "b1", selected: false, white: true, piece: "w_knight" },
      { id: "c1", selected: false, white: false, piece: "w_bishop" },
      { id: "d1", selected: false, white: true, piece: "w_queen" },
      { id: "e1", selected: false, white: false, piece: "w_king" },
      { id: "f1", selected: false, white: true, piece: "w_bishop" },
      { id: "g1", selected: false, white: false, piece: "w_knight" },
      { id: "h1", selected: false, white: true, piece: "w_rook" },
    ],
  ];
  const [piecePosition, setPiecePosition] = useState([
    [
      { id: "a8", selected: false, white: true, piece: "b_rook" },
      { id: "b8", selected: false, white: false, piece: "b_knight" },
      { id: "c8", selected: false, white: true, piece: "b_bishop" },
      { id: "d8", selected: false, white: false, piece: "b_queen" },
      { id: "e8", selected: false, white: true, piece: "b_king" },
      { id: "f8", selected: false, white: false, piece: "b_bishop" },
      { id: "g8", selected: false, white: true, piece: "b_knight" },
      { id: "h8", selected: false, white: false, piece: "b_rook" },
    ],
    [
      { id: "a7", selected: false, white: false, piece: "b_pawn" },
      { id: "b7", selected: false, white: true, piece: "b_pawn" },
      { id: "c7", selected: false, white: false, piece: "b_pawn" },
      { id: "d7", selected: false, white: true, piece: "b_pawn" },
      { id: "e7", selected: false, white: false, piece: "b_pawn" },
      { id: "f7", selected: false, white: true, piece: "b_pawn" },
      { id: "g7", selected: false, white: false, piece: "b_pawn" },
      { id: "h7", selected: false, white: true, piece: "b_pawn" },
    ],
    [
      { id: "a6", selected: false, white: true, piece: "" },
      { id: "b6", selected: false, white: false, piece: "" },
      { id: "c6", selected: false, white: true, piece: "" },
      { id: "d6", selected: false, white: false, piece: "" },
      { id: "e6", selected: false, white: true, piece: "" },
      { id: "f6", selected: false, white: false, piece: "" },
      { id: "g6", selected: false, white: true, piece: "" },
      { id: "h6", selected: false, white: false, piece: "" },
    ],
    [
      { id: "a5", selected: false, white: false, piece: "" },
      { id: "b5", selected: false, white: true, piece: "" },
      { id: "c5", selected: false, white: false, piece: "" },
      { id: "d5", selected: false, white: true, piece: "" },
      { id: "e5", selected: false, white: false, piece: "" },
      { id: "f5", selected: false, white: true, piece: "" },
      { id: "g5", selected: false, white: false, piece: "" },
      { id: "h5", selected: false, white: true, piece: "" },
    ],
    [
      { id: "a4", selected: false, white: true, piece: "" },
      { id: "b4", selected: false, white: false, piece: "" },
      { id: "c4", selected: false, white: true, piece: "" },
      { id: "d4", selected: false, white: false, piece: "" },
      { id: "e4", selected: false, white: true, piece: "" },
      { id: "f4", selected: false, white: false, piece: "" },
      { id: "g4", selected: false, white: true, piece: "" },
      { id: "h4", selected: false, white: false, piece: "" },
    ],
    [
      { id: "a3", selected: false, white: false, piece: "" },
      { id: "b3", selected: false, white: true, piece: "" },
      { id: "c3", selected: false, white: false, piece: "" },
      { id: "d3", selected: false, white: true, piece: "" },
      { id: "e3", selected: false, white: false, piece: "" },
      { id: "f3", selected: false, white: true, piece: "" },
      { id: "g3", selected: false, white: false, piece: "" },
      { id: "h3", selected: false, white: true, piece: "" },
    ],
    [
      { id: "a2", selected: false, white: true, piece: "w_pawn" },
      { id: "b2", selected: false, white: false, piece: "w_pawn" },
      { id: "c2", selected: false, white: true, piece: "w_pawn" },
      { id: "d2", selected: false, white: false, piece: "w_pawn" },
      { id: "e2", selected: false, white: true, piece: "w_pawn" },
      { id: "f2", selected: false, white: false, piece: "w_pawn" },
      { id: "g2", selected: false, white: true, piece: "w_pawn" },
      { id: "h2", selected: false, white: false, piece: "w_pawn" },
    ],
    [
      { id: "a1", selected: false, white: false, piece: "w_rook" },
      { id: "b1", selected: false, white: true, piece: "w_knight" },
      { id: "c1", selected: false, white: false, piece: "w_bishop" },
      { id: "d1", selected: false, white: true, piece: "w_queen" },
      { id: "e1", selected: false, white: false, piece: "w_king" },
      { id: "f1", selected: false, white: true, piece: "w_bishop" },
      { id: "g1", selected: false, white: false, piece: "w_knight" },
      { id: "h1", selected: false, white: true, piece: "w_rook" },
    ],
  ]);
  // const [piecePosition, setPiecePosition] = useState([
  //   [
  //     { id: "a8", selected: false, white: true, piece: "b_rook" },
  //     { id: "b8", selected: false, white: false, piece: "b_knight" },
  //     { id: "c8", selected: false, white: true, piece: "b_bishop" },
  //     { id: "d8", selected: false, white: false, piece: "b_queen" },
  //     { id: "e8", selected: false, white: true, piece: "b_king" },
  //     { id: "f8", selected: false, white: false, piece: "b_bishop" },
  //     { id: "g8", selected: false, white: true, piece: "b_knight" },
  //     { id: "h8", selected: false, white: false, piece: "b_rook" },
  //   ],
  //   [
  //     { id: "a7", selected: false, white: false, piece: "" },
  //     { id: "b7", selected: false, white: true, piece: "" },
  //     { id: "c7", selected: false, white: false, piece: "" },
  //     { id: "d7", selected: false, white: true, piece: "" },
  //     { id: "e7", selected: false, white: false, piece: "" },
  //     { id: "f7", selected: false, white: true, piece: "" },
  //     { id: "g7", selected: false, white: false, piece: "" },
  //     { id: "h7", selected: false, white: true, piece: "" },
  //   ],
  //   [
  //     { id: "a6", selected: false, white: true, piece: "b_rook" },
  //     { id: "b6", selected: false, white: false, piece: "" },
  //     { id: "c6", selected: false, white: true, piece: "" },
  //     { id: "d6", selected: false, white: false, piece: "" },
  //     { id: "e6", selected: false, white: true, piece: "" },
  //     { id: "f6", selected: false, white: false, piece: "" },
  //     { id: "g6", selected: false, white: true, piece: "" },
  //     { id: "h6", selected: false, white: false, piece: "" },
  //   ],
  //   [
  //     { id: "a5", selected: false, white: false, piece: "" },
  //     { id: "b5", selected: false, white: true, piece: "" },
  //     { id: "c5", selected: false, white: false, piece: "" },
  //     { id: "d5", selected: false, white: true, piece: "" },
  //     { id: "e5", selected: false, white: false, piece: "" },
  //     { id: "f5", selected: false, white: true, piece: "" },
  //     { id: "g5", selected: false, white: false, piece: "" },
  //     { id: "h5", selected: false, white: true, piece: "" },
  //   ],
  //   [
  //     { id: "a4", selected: false, white: true, piece: "" },
  //     { id: "b4", selected: false, white: false, piece: "" },
  //     { id: "c4", selected: false, white: true, piece: "" },
  //     { id: "d4", selected: false, white: false, piece: "" },
  //     { id: "e4", selected: false, white: true, piece: "" },
  //     { id: "f4", selected: false, white: false, piece: "" },
  //     { id: "g4", selected: false, white: true, piece: "" },
  //     { id: "h4", selected: false, white: false, piece: "" },
  //   ],
  //   [
  //     { id: "a3", selected: false, white: false, piece: "" },
  //     { id: "b3", selected: false, white: true, piece: "" },
  //     { id: "c3", selected: false, white: false, piece: "" },
  //     { id: "d3", selected: false, white: true, piece: "" },
  //     { id: "e3", selected: false, white: false, piece: "" },
  //     { id: "f3", selected: false, white: true, piece: "" },
  //     { id: "g3", selected: false, white: false, piece: "" },
  //     { id: "h3", selected: false, white: true, piece: "" },
  //   ],
  //   [
  //     { id: "a2", selected: false, white: true, piece: "" },
  //     { id: "b2", selected: false, white: false, piece: "" },
  //     { id: "c2", selected: false, white: true, piece: "" },
  //     { id: "d2", selected: false, white: false, piece: "" },
  //     { id: "e2", selected: false, white: true, piece: "" },
  //     { id: "f2", selected: false, white: false, piece: "" },
  //     { id: "g2", selected: false, white: true, piece: "" },
  //     { id: "h2", selected: false, white: false, piece: "" },
  //   ],
  //   [
  //     { id: "a1", selected: false, white: false, piece: "w_rook" },
  //     { id: "b1", selected: false, white: true, piece: "w_knight" },
  //     { id: "c1", selected: false, white: false, piece: "w_bishop" },
  //     { id: "d1", selected: false, white: true, piece: "w_queen" },
  //     { id: "e1", selected: false, white: false, piece: "w_king" },
  //     { id: "f1", selected: false, white: true, piece: "w_bishop" },
  //     { id: "g1", selected: false, white: false, piece: "w_knight" },
  //     { id: "h1", selected: false, white: true, piece: "w_rook" },
  //   ],
  // ]);
  const [color, setColor] = useState("w");
  const [selectedPosition, setSelectedPosition] = useState({});
  const [socket, setSocket] = useState();
  const movements = [];

  const clearMovementsArray = () => {
    while (movements.length > 0) {
      movements.pop();
    }
  };

  const kingChecker = (newPiecePosition) => {
    let r = -1,
      c = -1;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (newPiecePosition[i][j].piece === `${color}_king`) {
          r = i;
          c = j;
          break;
        }
      }
      if (r !== -1 && c !== -1) {
        break;
      }
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = newPiecePosition[i][j].piece;
        if (piece[0] !== color) {
          clearMovementsArray();
          movementsGenerator(
            piece.substring(2, piece.length),
            i,
            j,
            piece[0],
            newPiecePosition
          );
        }
        for (let k = 0; k < movements.length; k++) {
          const { x, y } = movements[k];
          if (x === r && y === c) {
            // console.log("bazinga");
            clearMovementsArray();
            return false;
          }
        }
      }
    }
    clearMovementsArray();
    return true;
  };

  const selectPositions = () => {
    const newPiecePosition = [...piecePosition];

    for (let i = 0; i < movements.length; i++) {
      const { x, y } = movements[i];
      if (i === 0) {
        setSelectedPosition({ x, y });
      }
      newPiecePosition[x][y].selected = true;
    }

    setPiecePosition(newPiecePosition);
  };

  const pawnKillingMovement = (
    moves,
    x,
    y,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (tcolor === color) {
      pawnKillingMovement(
        moves - 1,
        x - 1,
        y + 1,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      pawnKillingMovement(
        moves - 1,
        x - 1,
        y - 1,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else {
      pawnKillingMovement(
        moves - 1,
        x + 1,
        y + 1,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      pawnKillingMovement(
        moves - 1,
        x + 1,
        y - 1,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    }
  };

  const pawnMovement = (
    moves,
    x,
    y,
    limit,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;
    if (newPiecePosition[x][y].piece !== "" && moves < limit) {
      return;
    }

    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    // console.log(x, y);
    pawnMovement(
      moves - 1,
      x - 1,
      y,
      limit,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
  };

  const rookMovement = (
    moves,
    x,
    y,
    direction,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1000) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    if (direction === "n")
      rookMovement(
        moves - 1,
        x - 1,
        y,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "s")
      rookMovement(
        moves - 1,
        x + 1,
        y,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "w")
      rookMovement(
        moves - 1,
        x,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "e")
      rookMovement(
        moves - 1,
        x,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
  };

  const knightMovement = (
    moves,
    x,
    y,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    knightMovement(
      moves - 1,
      x + 2,
      y + 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x + 2,
      y - 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x - 2,
      y + 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x - 2,
      y - 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x + 1,
      y + 2,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x + 1,
      y - 2,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x - 1,
      y + 2,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    knightMovement(
      moves - 1,
      x - 1,
      y - 2,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
  };

  const bishopMovement = (
    moves,
    x,
    y,
    direction,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1000) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    if (direction === "ne")
      bishopMovement(
        moves - 1,
        x - 1,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "se")
      bishopMovement(
        moves - 1,
        x + 1,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "sw")
      bishopMovement(
        moves - 1,
        x + 1,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "nw")
      bishopMovement(
        moves - 1,
        x - 1,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
  };
  const queenMovement = (
    moves,
    x,
    y,
    direction,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1000) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    if (direction === "n")
      queenMovement(
        moves - 1,
        x - 1,
        y,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "e")
      queenMovement(
        moves - 1,
        x,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "s")
      queenMovement(
        moves - 1,
        x + 1,
        y,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "w")
      queenMovement(
        moves - 1,
        x,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "ne")
      queenMovement(
        moves - 1,
        x - 1,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "se")
      queenMovement(
        moves - 1,
        x + 1,
        y + 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "sw")
      queenMovement(
        moves - 1,
        x + 1,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    else if (direction === "nw")
      queenMovement(
        moves - 1,
        x - 1,
        y - 1,
        direction,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
  };
  const kingMovement = (
    moves,
    x,
    y,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (newPiecePosition[x][y].piece !== "" && moves < 1) {
      if (newPiecePosition[x][y].piece[0] !== tcolor) {
        if (isPseudo) pseudoMovements.push({ x: x, y: y });
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (isPseudo) pseudoMovements.push({ x: x, y: y });
    movements.push({ x: x, y: y });
    kingMovement(
      moves - 1,
      x - 1,
      y,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x,
      y + 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x + 1,
      y,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x,
      y - 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );

    kingMovement(
      moves - 1,
      x - 1,
      y + 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x + 1,
      y + 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x + 1,
      y - 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    kingMovement(
      moves - 1,
      x - 1,
      y - 1,
      tcolor,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
  };

  const movementsGenerator = (
    piece,
    x,
    y,
    tcolor,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    // console.log(tcolor, color);
    // console.log(piece);
    if (piece === "pawn") {
      if (tcolor !== color) {
        if (x === 1) {
          pawnMovement(2, x, y, 2, newPiecePosition, isPseudo, pseudoMovements);
        } else {
          pawnMovement(1, x, y, 1, newPiecePosition, isPseudo, pseudoMovements);
        }
      } else {
        if (x === 6) {
          pawnMovement(2, x, y, 2, newPiecePosition, isPseudo, pseudoMovements);
        } else {
          pawnMovement(1, x, y, 1, newPiecePosition, isPseudo, pseudoMovements);
        }
      }
      pawnKillingMovement(
        1,
        x,
        y,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else if (piece === "rook") {
      rookMovement(
        1000,
        x,
        y,
        "n",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      rookMovement(
        1000,
        x,
        y,
        "s",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      rookMovement(
        1000,
        x,
        y,
        "w",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      rookMovement(
        1000,
        x,
        y,
        "e",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else if (piece === "knight") {
      knightMovement(
        1,
        x,
        y,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else if (piece === "bishop") {
      bishopMovement(
        1000,
        x,
        y,
        "ne",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      bishopMovement(
        1000,
        x,
        y,
        "se",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      bishopMovement(
        1000,
        x,
        y,
        "sw",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      bishopMovement(
        1000,
        x,
        y,
        "nw",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else if (piece === "queen") {
      queenMovement(
        1000,
        x,
        y,
        "n",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "e",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "s",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "w",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );

      queenMovement(
        1000,
        x,
        y,
        "ne",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "se",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "sw",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
      queenMovement(
        1000,
        x,
        y,
        "nw",
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    } else if (piece === "king") {
      kingMovement(
        1,
        x,
        y,
        tcolor,
        newPiecePosition,
        isPseudo,
        pseudoMovements
      );
    }
  };

  const calculateMovements = (
    id,
    piece,
    newPiecePosition = piecePosition,
    isPseudo = false,
    pseudoMovements = []
  ) => {
    // console.log(newPiecePosition);
    let x = -1,
      y = -1;

    clearMovementsArray();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (newPiecePosition[i][j].id === id) {
          x = i;
          y = j;
          break;
        }
      }
    }

    movementsGenerator(
      piece,
      x,
      y,
      color,
      newPiecePosition,
      isPseudo,
      pseudoMovements
    );
    // console.log("calculate movements", movements);
    // setPseudoMovements(movements);
    selectPositions();
  };

  const validMoves = (newPiecePosition, pseudoMovements) => {
    let count = 0;

    const startx = pseudoMovements[0].x,
      starty = pseudoMovements[0].y;
    for (let i = 1; i < pseudoMovements.length; i++) {
      const endx = pseudoMovements[i].x,
        endy = pseudoMovements[i].y;

      const deletedPiece = newPiecePosition[endx][endy].piece;

      newPiecePosition[endx][endy].piece =
        newPiecePosition[startx][starty].piece;
      newPiecePosition[startx][starty].piece = "";

      if (kingChecker(newPiecePosition)) count++;

      newPiecePosition[startx][starty].piece =
        newPiecePosition[endx][endy].piece;
      newPiecePosition[endx][endy].piece = deletedPiece;
    }
    return count;
  };

  const checkStatus = (newPiecePosition) => {
    // console.log(newPiecePosition);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (newPiecePosition[i][j].piece[0] === color) {
          const piece = newPiecePosition[i][j].piece;
          console.log(piece, i, j);
          const pseudoMovements = [];
          calculateMovements(
            newPiecePosition[i][j].id,
            piece.substring(2, piece.length),
            newPiecePosition,
            true,
            pseudoMovements
          );
          const numOfValidMoves = validMoves(newPiecePosition, pseudoMovements);
          if (numOfValidMoves > 0) return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="container mx-auto">
      <GameLogic
        movements={movements}
        piecePosition={piecePosition}
        setPiecePosition={setPiecePosition}
        calculateMovements={calculateMovements}
        color={color}
        setColor={setColor}
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        kingChecker={kingChecker}
        username={username}
        // setUsername={setUsername}
        socket={socket}
        setSocket={setSocket}
        defaultPiecePosition={defaultPiecePosition}
        // pseudoMovements={pseudoMovements}
        checkStatus={checkStatus}
      />
    </div>
  );
}

export default Play;
