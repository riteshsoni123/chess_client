import React, { useEffect, useState } from "react";
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
    checkStatus,
  } = props;
  const [opponent, setOpponent] = useState("");
  const [turn, setTurn] = useState(true);
  const [mIndex, setMIndex] = useState(-1);
  const [movesIndex, setMovesIndex] = useState([]);
  const [movesNotation, setMovesNotation] = useState([]);
  const [opponentRunTimer, setOpponentRunTimer] = useState(false);
  const [userRunTimer, setUserRunTimer] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const [recievedDrawOffer, setRecievedDrawOffer] = useState(false);
  const [gameEnded, setGameEneded] = useState(false);

  // recievedMoves
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

      //------------------------------------------------------------------
      // code to check for checkmate or stalemate

      if (!checkStatus(newPiecePosition)) {
        if (!kingChecker(newPiecePosition)) {
          console.log("checkmate");
          resign();
        } else {
          console.log("stalemate");
          acceptDraw();
        }
      }
      clearSelection();

      //---------------------------------------------------------------------

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
      if (!userRunTimer) togglerUserTimer();
      if (opponentRunTimer) togglerOpponentTimer();
      // setCount((prevCount) => prevCount + 1);
    });
    return () => socket.off("recievedMoves");
  });

  const togglerUserTimer = () => setUserRunTimer((t) => !t);
  const togglerOpponentTimer = () => setOpponentRunTimer((t) => !t);

  const offerDraw = () => {
    // console.log("offer draw");
    socket.emit("offerDraw", { id: opponent, message: "draw offer" });
  };

  const acceptDraw = () => {
    socket.emit("acceptDraw", { id: opponent, message: "draw accepted" });
    setGameEneded(true);
    setRecievedDrawOffer(false);
    setGameStatus("Drawn");
  };

  const declineDraw = () => {
    // console.log("Draw declined");
    setRecievedDrawOffer(false);
  };

  const resign = () => {
    socket.emit("userResigned", { id: opponent, message: "user resigned" });
    setGameStatus("Lost");
    setGameEneded(true);
  };

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

  const movePiece = async (startx, starty, endx, endy, deletedPiece = "") => {
    if (!turn || mIndex + 1 !== movesIndex.length) return;
    const newPiecePosition = [...piecePosition];
    const newMovesIndex = [...movesIndex];
    const newMovesNotation = [...movesNotation];

    let tempDeletedPiece = piecePosition[endx][endy].piece;

    newPiecePosition[endx][endy].piece = newPiecePosition[startx][starty].piece;
    newPiecePosition[startx][starty].piece = "";

    if (!kingChecker(newPiecePosition)) {
      newPiecePosition[startx][starty].piece =
        newPiecePosition[endx][endy].piece;
      newPiecePosition[endx][endy].piece = tempDeletedPiece;
      return;
    }

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
    if (userRunTimer) togglerUserTimer();
    if (!opponentRunTimer) togglerOpponentTimer();
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
        movePiece(x, y, r, c);
      }
      clearSelection();
      return;
    }

    if (
      piecePosition[r][c].piece[0] === color &&
      piecePosition[r][c].selected
    ) {
      clearSelection();
      return;
    }

    if (piecePosition[r][c].piece[0] !== color) {
      clearSelection();
      return;
    }

    clearSelection();

    const newPiecePosition = [...piecePosition];

    // console.log(newPiecePosition[r][c].piece, r, c);

    const piece = newPiecePosition[r][c].piece;

    // console.log(demoPiecePosition);
    calculateMovements(id, piece.substring(2, piece.length));
    // console.log(movements);

    setPiecePosition(newPiecePosition);
  };
  return (
    <div className="container mx-auto">
      <Game
        piecePosition={piecePosition}
        setPiecePosition={setPiecePosition}
        positionClicked={positionClicked}
        username={username}
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
        userRunTimer={userRunTimer}
        setUserRunTimer={setUserRunTimer}
        opponentRunTimer={opponentRunTimer}
        setOpponentRunTimer={setOpponentRunTimer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        offerDraw={offerDraw}
        declineDraw={declineDraw}
        acceptDraw={acceptDraw}
        resign={resign}
        recievedDrawOffer={recievedDrawOffer}
        setRecievedDrawOffer={setRecievedDrawOffer}
        gameEnded={gameEnded}
        setGameEneded={setGameEneded}
      />
    </div>
  );
}

export default GameLogic;
