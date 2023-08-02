import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
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
    username,
    socket,
    setSocket,
    defaultPiecePosition,
  } = props;
  const [opponent, setOpponent] = useState("");
  const [turn, setTurn] = useState(true);
  const [mIndex, setMIndex] = useState(-1);
  const [movesIndex, setMovesIndex] = useState([]);
  const [movesNotation, setMovesNotation] = useState([]);
  // const [lastPiecePosition, setLastPiecePosition] = useState(piecePosition);

  useEffect(() => {
    if (socket == null) return;

    socket.on("recievedMoves", (data) => {
      const { startx, starty, endx, endy, deletedPiece } = data;
      const newPiecePosition = [...piecePosition];
      const newMovesIndex = [...movesIndex];
      const newMovesNotation = [...movesNotation];

      let tmIndex = mIndex;

      // console.log("tmIndex", tmIndex);

      while (tmIndex + 1 < movesIndex.length) {
        const si = movesIndex[tmIndex + 1].si;
        const sj = movesIndex[tmIndex + 1].sj;
        const ei = movesIndex[tmIndex + 1].ei;
        const ej = movesIndex[tmIndex + 1].ej;
        // const deletedPiece=movesIndex[tmIndex].deletedPiece;

        newPiecePosition[ei][ej].piece = newPiecePosition[si][sj].piece;
        newPiecePosition[si][sj].piece = "";

        tmIndex++;
      }

      let tempDeletedPiece = piecePosition[7 - endx][endy].piece;

      newPiecePosition[7 - endx][endy].piece =
        newPiecePosition[7 - startx][starty].piece;
      newPiecePosition[7 - startx][starty].piece = deletedPiece;

      newMovesIndex.push({
        si: 7 - startx,
        sj: starty,
        ei: 7 - endx,
        ej: endy,
        deletedPiece: tempDeletedPiece,
      });

      let s =
        piecePosition[7 - startx][starty].id +
        "-" +
        piecePosition[7 - endx][endy].id;
      if (color === "w") {
        newMovesNotation[movesNotation.length - 1].second = s;
      } else {
        newMovesNotation.push({
          id: movesNotation.length,
          first: s,
          second: "",
        });
      }

      setPiecePosition(newPiecePosition);
      setMovesIndex(newMovesIndex);
      setMovesNotation(newMovesNotation);
      setMIndex(newMovesIndex.length - 1);
      setTurn((prevTurn) => !prevTurn);
      // setCount((prevCount) => prevCount + 1);
    });
    return () => socket.off("recievedMoves");
  });

  const changePosition = (t, back) => {
    const newPiecePosition = [...piecePosition];

    const si = movesIndex[t].si;
    const sj = movesIndex[t].sj;
    const ei = movesIndex[t].ei;
    const ej = movesIndex[t].ej;
    const deletedPiece = movesIndex[t].deletedPiece;

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
    // if (mIndex + 1 === movesNotation.length)
    //   setLastPiecePosition(piecePosition);
    changePosition(mIndex, true);
    setMIndex((val) => val - 1);
  };

  const increase_moves_index = () => {
    if (mIndex === movesIndex.length - 1) return;
    changePosition(mIndex + 1, false);
    setMIndex((val) => val + 1);
  };

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
    if (!turn || mIndex + 1 !== movesIndex.length) return;
    const newPiecePosition = [...piecePosition];
    const newMovesIndex = [...movesIndex];
    const newMovesNotation = [...movesNotation];

    let tempDeletedPiece = piecePosition[endx][endy].piece;

    newPiecePosition[endx][endy].piece = newPiecePosition[startx][starty].piece;
    newPiecePosition[startx][starty].piece = deletedPiece;

    newMovesIndex.push({
      si: startx,
      sj: starty,
      ei: endx,
      ej: endy,
      deletedPiece: tempDeletedPiece,
    });

    let s =
      piecePosition[startx][starty].id + "-" + piecePosition[endx][endy].id;
    // console.log("s", s);
    if (color === "w") {
      newMovesNotation.push({ id: movesNotation.length, first: s, second: "" });
    } else {
      newMovesNotation[movesNotation.length - 1].second = s;
    }

    socket.emit("sendMoves", {
      id: opponent,
      startx: startx,
      starty: starty,
      endx: endx,
      endy: endy,
      deletedPiece: deletedPiece,
    });

    setTurn((prevTurn) => !prevTurn);
    setPiecePosition(newPiecePosition);
    setMovesIndex(newMovesIndex);
    setMovesNotation(newMovesNotation);
    setMIndex((prevValue) => prevValue + 1);
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
      <Game
        piecePosition={piecePosition}
        setPiecePosition={setPiecePosition}
        // setLastPiecePosition={setLastPiecePosition}
        positionClicked={positionClicked}
        username={username}
        // setUsername={setUsername}
        setColor={setColor}
        socket={socket}
        setSocket={setSocket}
        opponent={opponent}
        setOpponent={setOpponent}
        setTurn={setTurn}
        defaultPiecePosition={defaultPiecePosition}
        increase_moves_index={increase_moves_index}
        reduce_moves_index={reduce_moves_index}
        movesNotation={movesNotation}
        mIndex={mIndex}
        movesIndex={movesIndex}
        color={color}
      />
    </div>
  );
}

export default GameLogic;
