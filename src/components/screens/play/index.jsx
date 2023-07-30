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

  // useEffect(() => {
  //   console.log("running useEffect");
  //   console.log(selectedPosition);
  // }, [selectedPosition]);

  const clearMovementsArray = () => {
    while (movements.length > 0) {
      movements.pop();
    }
  };

  const kingChecker = () => {
    console.log("hi");

    let r = -1,
      c = -1;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (piecePosition[i][j].piece === `${color}_king`) {
          r = i;
          c = j;
          break;
        }
      }
      if (r !== -1 && c !== -1) {
        break;
      }
    }

    console.log(r, c);

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = piecePosition[i][j].piece;
        if (piece[0] !== color) {
          clearMovementsArray();
          movementsGenerator(piece.substring(2, piece.length), i, j, piece[0]);
        }
        for (let k = 0; k < movements.length; k++) {
          const { x, y } = movements[k];
          if (x === r && y === c) {
            console.log("bazinga");
            return false;
          }
        }
      }
    }
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

  const pawnKillingMovement = (moves, x, y, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }
    if (tcolor === color) {
      pawnKillingMovement(moves - 1, x - 1, y + 1, tcolor);
      pawnKillingMovement(moves - 1, x - 1, y - 1, tcolor);
    } else {
      pawnKillingMovement(moves - 1, x + 1, y + 1, tcolor);
      pawnKillingMovement(moves - 1, x + 1, y - 1, tcolor);
    }
  };

  const pawnMovement = (moves, x, y, limit) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;
    if (piecePosition[x][y].piece !== "" && moves < limit) {
      return;
    }

    movements.push({ x: x, y: y });
    pawnMovement(moves - 1, x - 1, y, limit);
  };

  const rookMovement = (moves, x, y, direction, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1000) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }

    movements.push({ x: x, y: y });
    if (direction === "n") rookMovement(moves - 1, x - 1, y, direction, tcolor);
    else if (direction === "s")
      rookMovement(moves - 1, x + 1, y, direction, tcolor);
    else if (direction === "w")
      rookMovement(moves - 1, x, y - 1, direction, tcolor);
    else if (direction === "e")
      rookMovement(moves - 1, x, y + 1, direction, tcolor);
  };

  const knightMovement = (moves, x, y, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }

    movements.push({ x: x, y: y });
    knightMovement(moves - 1, x + 2, y + 1, tcolor);
    knightMovement(moves - 1, x + 2, y - 1, tcolor);
    knightMovement(moves - 1, x - 2, y + 1, tcolor);
    knightMovement(moves - 1, x - 2, y - 1, tcolor);
    knightMovement(moves - 1, x + 1, y + 2, tcolor);
    knightMovement(moves - 1, x + 1, y - 2, tcolor);
    knightMovement(moves - 1, x - 1, y + 2, tcolor);
    knightMovement(moves - 1, x - 1, y - 2, tcolor);
  };

  const bishopMovement = (moves, x, y, direction, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1000) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }

    movements.push({ x: x, y: y });
    if (direction === "ne")
      bishopMovement(moves - 1, x - 1, y + 1, direction, tcolor);
    else if (direction === "se")
      bishopMovement(moves - 1, x + 1, y + 1, direction, tcolor);
    else if (direction === "sw")
      bishopMovement(moves - 1, x + 1, y - 1, direction, tcolor);
    else if (direction === "nw")
      bishopMovement(moves - 1, x - 1, y - 1, direction, tcolor);
  };
  const queenMovement = (moves, x, y, direction, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1000) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }

    movements.push({ x: x, y: y });
    if (direction === "n")
      queenMovement(moves - 1, x - 1, y, direction, tcolor);
    else if (direction === "e")
      queenMovement(moves - 1, x, y + 1, direction, tcolor);
    else if (direction === "s")
      queenMovement(moves - 1, x + 1, y, direction, tcolor);
    else if (direction === "w")
      queenMovement(moves - 1, x, y - 1, direction, tcolor);
    else if (direction === "ne")
      queenMovement(moves - 1, x - 1, y + 1, direction, tcolor);
    else if (direction === "se")
      queenMovement(moves - 1, x + 1, y + 1, direction, tcolor);
    else if (direction === "sw")
      queenMovement(moves - 1, x + 1, y - 1, direction, tcolor);
    else if (direction === "nw")
      queenMovement(moves - 1, x - 1, y - 1, direction, tcolor);
  };
  const kingMovement = (moves, x, y, tcolor) => {
    if (moves === -1) return;
    if (x > 7 || x < 0 || y > 7 || y < 0) return;

    if (piecePosition[x][y].piece !== "" && moves < 1) {
      if (piecePosition[x][y].piece[0] !== tcolor) {
        movements.push({ x: x, y: y });
      }
      return;
    }

    movements.push({ x: x, y: y });
    kingMovement(moves - 1, x - 1, y, tcolor);
    kingMovement(moves - 1, x, y + 1, tcolor);
    kingMovement(moves - 1, x + 1, y, tcolor);
    kingMovement(moves - 1, x, y - 1, tcolor);

    kingMovement(moves - 1, x - 1, y + 1, tcolor);
    kingMovement(moves - 1, x + 1, y + 1, tcolor);
    kingMovement(moves - 1, x + 1, y - 1, tcolor);
    kingMovement(moves - 1, x - 1, y - 1, tcolor);
  };

  const movementsGenerator = (piece, x, y, tcolor) => {
    // console.log(tcolor, color);
    if (piece === "pawn") {
      if (tcolor !== color) {
        if (x === 1) {
          pawnMovement(2, x, y, 2);
        } else {
          pawnMovement(1, x, y, 1);
        }
      } else {
        if (x === 6) {
          pawnMovement(2, x, y, 2);
        } else {
          pawnMovement(1, x, y, 1);
        }
      }
      pawnKillingMovement(1, x, y, tcolor);
    } else if (piece === "rook") {
      rookMovement(1000, x, y, "n", tcolor);
      rookMovement(1000, x, y, "s", tcolor);
      rookMovement(1000, x, y, "w", tcolor);
      rookMovement(1000, x, y, "e", tcolor);
    } else if (piece === "knight") {
      knightMovement(1, x, y, tcolor);
    } else if (piece === "bishop") {
      bishopMovement(1000, x, y, "ne", tcolor);
      bishopMovement(1000, x, y, "se", tcolor);
      bishopMovement(1000, x, y, "sw", tcolor);
      bishopMovement(1000, x, y, "nw", tcolor);
    } else if (piece === "queen") {
      queenMovement(1000, x, y, "n", tcolor);
      queenMovement(1000, x, y, "e", tcolor);
      queenMovement(1000, x, y, "s", tcolor);
      queenMovement(1000, x, y, "w", tcolor);

      queenMovement(1000, x, y, "ne", tcolor);
      queenMovement(1000, x, y, "se", tcolor);
      queenMovement(1000, x, y, "sw", tcolor);
      queenMovement(1000, x, y, "nw", tcolor);
    } else if (piece === "king") {
      kingMovement(1, x, y, tcolor);
    }
  };

  const calculateMovements = (id, piece) => {
    let x = -1,
      y = -1;

    clearMovementsArray();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (piecePosition[i][j].id === id) {
          x = i;
          y = j;
          break;
        }
      }
    }

    movementsGenerator(piece, x, y, color);
    selectPositions();
  };

  return (
    <div className="container mx-auto">
      <GameLogic
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
      />
    </div>
  );
}

export default Play;
