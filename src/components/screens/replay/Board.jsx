import React from "react";
import "../../../index.css";

function Board(props) {
  const {
    mIndex,
    piecePosition,
    moves_notation,
    reduce_moves_index,
    increase_moves_index,
  } = props;

  return (
    <div className="border-2 container mx-auto flex flex-row justify-center w-2/3 mt-10">
      <div className="border-2 w-8/10">
        {piecePosition.map((row, i) => {
          return (
            <div key={i} className="center">
              <div className="row center">
                {row.map((square, j) => {
                  return (
                    <div
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
                        <img
                          src={require(`../../../pieceImg/${square.piece}.png`)}
                        />
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
      <div className="w-3/12 ml-5 rounded-t-lg border-[1px] border-black bg-[#E5E4E2]">
        <div className="rounded-t-lg flex justify-center bg-[#727272]">
          Moves
        </div>
        <div>
          <div>
            {moves_notation.map((move) => {
              return (
                <div
                  key={move.id}
                  className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center"
                >
                  <span className="px-1 bg-[#C0C0C0]">{move.id + 1}.</span>
                  <div
                    className={
                      mIndex === move.id * 2
                        ? "bg-[#848884]"
                        : move.id % 2 === 1
                        ? "bg-[#D9D9D9]"
                        : "bg-[#ADADAD]"
                    }
                  >
                    {move.first}
                  </div>
                  <div
                    className={
                      mIndex === move.id * 2 + 1
                        ? "bg-[#848884]"
                        : move.id % 2 === 0
                        ? "bg-[#D9D9D9]"
                        : "bg-[#ADADAD]"
                    }
                  >
                    {move.second}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:cursor-pointer">
            <div onClick={() => reduce_moves_index()}>Backword</div>
            <div onClick={() => increase_moves_index()}>Forward</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
