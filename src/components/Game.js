import React from "react";
import "../index.css";

function Game(props) {
  const { positionClicked, piecePosition } = props;

  return (
    <div className="container mx-auto">
      {piecePosition.map((row, i) => {
        return (
          <div key={i} className="center">
            <div className="row center">
              {row.map((square, j) => {
                return (
                  <div
                    onClick={() => positionClicked(square.id, i, j)}
                    key={square.id}
                    className={
                      (square.white
                        ? "white" + (square.selected ? " white-selected" : "")
                        : "black" +
                          (square.selected ? " black-selected" : "")) +
                      " center" +
                      " square"
                    }
                  >
                    {square.piece ? (
                      <img src={require(`../pieceImg/${square.piece}.png`)} />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Game;
