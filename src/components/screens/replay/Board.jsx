import React from "react";
import "../../../index.css";

function Board(props) {
  // const [opponent, setOpponent] = useState("unknown");
  const opponent = "unknown";
  const username = "riteshsoni123";
  const {
    mIndex,
    piecePosition,
    moves_notation,
    reduce_moves_index,
    increase_moves_index,
  } = props;

  return (
    <div className="container m-auto flex flex-row justify-center items-center w-2/3 mt-10 [&>div]:shadow-xl">
      <div className="w-8/10">
        <div className="bg-[#494F55] rounded-t-md h-[40px] text-xl text-[#BABCBE] flex items-center justify-between px-3">
          <div>{opponent}</div>
          <div>5:00</div>
        </div>
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
                          alt=""
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
        <div className="bg-[#494F55] rounded-b-md h-10 text-xl text-[#BABCBE] flex items-center justify-between px-3">
          <div>{username}</div>
          <div>5:00</div>
        </div>
      </div>
      <div className="w-3/12 ml-10 h-[720px] rounded-lg bg-[#BABCBE] flex-1">
        <div className="bg-[#494F55] text-xl text-[#BABCBE] rounded-t-lg h-10 flex justify-center items-center">
          Moves
        </div>
        <div className="h-[640px]">
          <div className="w-1/1 overflow-y-scroll no-scrollbar h-full">
            {moves_notation.map((move) => {
              return (
                <div
                  key={move.id}
                  className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center"
                >
                  <span className="px-1 bg-[#C0C0C0] w-[30px]">{move.id}.</span>
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
        </div>
        <div className="rounded-b-lg h-[40px] bg-[#5f6368]">
          <div className="flex flex-row h-full [&>div>button]:rounded-b-lg [&>div>button]:w-full [&>div>button]:h-full [&>div]:h-full [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:cursor-pointer [&>div]:text-[#BABCBE] [&>div]:rounded-b-lg ">
            <div className="mr-[0.5px] bg-[#494F55] hover:bg-[#535353]">
              <button onClick={() => reduce_moves_index()}>Backward</button>
            </div>
            <div className="ml-[0.5px] bg-[#494F55] hover:bg-[#535353]">
              <button onClick={() => increase_moves_index()}>Forward</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
