import React, { useState } from "react";
import Board from "./Board";

function Position(props) {
  const { moves_index, first, second, first_res, second_res } = props;
  const [mIndex, setmIndex] = useState(-1);
  const moves_notation = [];

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
  for (let i = 0; i < moves_index.length; i++) {
    let si = moves_index[i].si;
    let sj = moves_index[i].sj;
    let ei = moves_index[i].ei;
    let ej = moves_index[i].ej;
    let s = piecePosition[si][sj].id + "-" + piecePosition[ei][ej].id;

    if (i % 2 === 0) {
      moves_notation.push({ id: parseInt((i + 1) / 2), first: s, second: "" });
    } else {
      moves_notation[moves_notation.length - 1].second = s;
    }
  }

  const changePosition = (t, back) => {
    const newPiecePosition = [...piecePosition];

    const { si, sj, ei, ej, deletedPiece } = moves_index[t];

    if (back) {
      newPiecePosition[si][sj].piece = newPiecePosition[ei][ej].piece;
      newPiecePosition[ei][ej].piece = deletedPiece;
    } else {
      newPiecePosition[ei][ej].piece = newPiecePosition[si][sj].piece;
      newPiecePosition[si][sj].piece = "";
    }

    setPiecePosition(newPiecePosition);
  };

  const reduce_moves_index = () => {
    if (mIndex === -1) return;
    changePosition(mIndex, true);
    setmIndex((val) => val - 1);
  };

  const increase_moves_index = () => {
    if (mIndex === moves_index.length - 1) return;
    changePosition(mIndex + 1, false);
    setmIndex((val) => val + 1);
  };

  return (
    <div className="container mx-auto">
      <Board
        mIndex={mIndex}
        piecePosition={piecePosition}
        moves_notation={moves_notation}
        increase_moves_index={increase_moves_index}
        reduce_moves_index={reduce_moves_index}
        first={first}
        second={second}
        first_res={first_res}
        second_res={second_res}
      />
    </div>
  );
}

export default Position;
