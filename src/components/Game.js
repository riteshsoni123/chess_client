import React, { useState } from "react";
import "../index.css";

function Game(props) {
  const { positionClicked, piecePosition } = props;
  const [mIndex, setimIndex] = useState(-1);
  const [opponent, setOpponent] = useState("unknown");
  const username = "riteshsoni123";
  const moves_notation = [];
  moves_notation.push({ id: 1, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 2, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 3, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 4, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 5, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 6, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 7, first: "f1-f2", second: "f2-f3" });
  moves_notation.push({ id: 8, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 9, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 10, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 11, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 12, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 13, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 14, first: "f1-f2", second: "f2-f3" });
  moves_notation.push({ id: 15, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 16, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 17, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 18, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 19, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 20, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 21, first: "f1-f2", second: "f2-f3" });
  moves_notation.push({ id: 22, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 23, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 24, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 25, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 26, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 27, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 28, first: "f1-f2", second: "f2-f3" });
  moves_notation.push({ id: 29, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 30, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 31, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 32, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 33, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 34, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 35, first: "f1-f2", second: "f2-f3" });

  // const username = "riteshsoni123";

  const chats = [
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
    {
      user: "riteshsoni123",
      message: "Hi,bro how are you",
    },
    {
      user: "vicky04",
      message: "I am fine bro what about you",
    },
  ];

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
        <div className="bg-[#494F55] rounded-b-md h-10 text-xl text-[#BABCBE] flex items-center justify-between px-3">
          <div>{username}</div>
          <div>5:00</div>
        </div>
      </div>

      <div className="w-3/12 ml-10 h-[720px] rounded-lg bg-[#BABCBE] flex-1">
        <div className="bg-[#494F55] text-xl text-[#BABCBE] rounded-t-lg h-10 flex justify-center items-center">
          Moves
        </div>
        <div className="h-[430px]">
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
        <div className="rounded-t-lg h-[30px] border-t-[1px] border-black">
          <div className="flex flex-row h-full [&>div]:h-full [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:cursor-pointer">
            <div className="border-r-[1px] border-black">Backword</div>
            <div>Forward</div>
          </div>
        </div>
        <div className="border-y-[1px] h-[30px] border-black">
          <div className="flex flex-row h-full [&>div]:h-full [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:cursor-pointer">
            <div className="border-r-[1px] border-black">Draw</div>
            <div>Resign</div>
          </div>
        </div>
        <div className="h-[190px]">
          <div className="overflow-y-scroll no-scrollbar h-[150px] border-b-[1px] border-black">
            {chats.map((chat, i) => {
              return (
                <div key={i} className="ml-1">
                  <div className="text-xs font-bold">{chat.user}</div>
                  <div className="text-xs">{chat.message}</div>
                </div>
              );
            })}
          </div>
          <input
            className="h-10 w-full bg-[#494F55] text-xl text-[#BABCBE] rounded-b-lg flex items-center pl-5"
            type="text"
            placeholder="Send Message..."
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
