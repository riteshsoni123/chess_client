import React, { useState } from "react";
import "../index.css";

function Game(props) {
  const { positionClicked, piecePosition } = props;
  const [mIndex, setimIndex] = useState(-1);
  const moves_notation = [];
  moves_notation.push({ id: 1, first: "h1-h2", second: "h2-h3" });
  moves_notation.push({ id: 2, first: "a1-a2", second: "a2-a3" });
  moves_notation.push({ id: 3, first: "b1-b2", second: "b2-b3" });
  moves_notation.push({ id: 4, first: "c1-c2", second: "c2-c3" });
  moves_notation.push({ id: 5, first: "d1-d2", second: "d2-d3" });
  moves_notation.push({ id: 6, first: "e1-e2", second: "e2-e3" });
  moves_notation.push({ id: 7, first: "f1-f2", second: "f2-f3" });

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
    <div className="border-2 container mx-auto flex flex-row justify-center w-2/3 mt-10">
      <div className="border-2 w-8/10">
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
      <div className="w-3/12 ml-5 rounded-t-lg border-[1px] border-black bg-[#E5E4E2]">
        <div className="rounded-t-lg flex justify-center bg-[#727272]">
          Moves
        </div>
        <div className="relative h-[640px]">
          <div className="w-1/1 overflow-y-scroll no-scrollbar h-[439px]">
            {moves_notation.map((move) => {
              return (
                <div
                  key={move.id}
                  className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center"
                >
                  <span className="px-1 bg-[#C0C0C0] w-[30px]">
                    {move.id + 1}.
                  </span>
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
          <div className="absolute bottom-[175px] left-0 right-0 rounded-t-lg border-t-[1px] border-black">
            <div className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:cursor-pointer">
              <div className="border-r-2 border-black">Backword</div>
              <div>Forward</div>
            </div>
          </div>
          <div className="absolute bottom-[150px] left-0 right-0 border-t-[1px] border-black">
            <div className="flex flex-row [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:cursor-pointer">
              <div className="border-r-2 border-black">Offer Draw</div>
              <div>Resign</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[150px] border-t-[1px] border-black">
            <div className="overflow-y-scroll no-scrollbar h-[125px] border-b-[1px] border-black">
              {chats.map((chat, i) => {
                return (
                  <div key={i} className="ml-1">
                    <div className="text-xs font-bold">{chat.user}</div>
                    <div className="text-xs">{chat.message}</div>
                  </div>
                );
              })}
            </div>
            <div className="absolute left-0 right-0 bottom-0 pl-1">
              Send message...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
