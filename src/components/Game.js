import React, { useEffect, useState } from "react";
import "../index.css";
import Container from "react-bootstrap/Container";

function Game(props) {
  const { positionClicked, piecePosition } = props;

  return (
    <Container>
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
    </Container>
  );
}

export default Game;
