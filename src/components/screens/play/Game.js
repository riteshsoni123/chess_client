import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";
import "../../../index.css";

function Game(props) {
  const { positionClicked, piecePosition, username, setUsername } = props;
  const navigate = useNavigate();
  const [mIndex, setimIndex] = useState(-1);
  const [opponent, setOpponent] = useState("");
  const [socket, setSocket] = useState();
  const [sudoOpponent, setSudoOpponent] = useState("");
  const [sudoChallanger, setSudoChallanger] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signup");
    } else {
      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);
        } catch (error) {
          localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      };
      fetchPrivateData();
    }
  }, [navigate]);

  const moves_notation = [];
  moves_notation.push({ id: 1, first: "h1-h2", second: "h2-h3" });

  useEffect(() => {
    console.log("function ran again");
    const newSocket = io(process.env.REACT_APP_BACKEND_URL, {
      query: { username },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [username]);

  useEffect(() => {
    if (socket == null) return;

    socket.on("recieveChallange", (data) => {
      console.log("challange created", data);
      setSudoChallanger(data);
    });
    return () => socket.off("recieveChallange");
  });

  useEffect(() => {
    if (socket == null) return;

    socket.on("acceptedChallange", (data) => {
      console.log("challange accepted", data);
      setOpponent(data);
    });
    return () => socket.off("acceptedChallange");
  });

  useEffect(() => {
    if (socket == null) return;

    socket.on("recieveMessage", (data) => {
      console.log("message recieved", data);
      const newChats = [...chats];

      newChats.push({
        user: opponent,
        message: data,
      });

      setChats(newChats);
    });
    return () => socket.off("recieveMessage");
  });

  const sendChallange = () => {
    socket.emit("sendChallange", { id: sudoOpponent, sender: username });
  };

  const acceptChallange = () => {
    socket.emit("acceptChallange", { id: sudoChallanger, sender: username });
    setOpponent(sudoChallanger);
  };

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      socket.emit("sendMessage", { id: opponent, message: message });

      const newChats = [...chats];

      newChats.push({
        user: username,
        message: message,
      });

      setChats(newChats);
      setMessage("");
    }
  };

  return (
    <div className="container m-auto flex flex-row justify-center items-center w-2/3 mt-10 [&>div]:shadow-xl">
      <div className="w-8/10">
        <div className="bg-[#494F55] rounded-t-md h-[40px] text-xl text-[#BABCBE] flex items-center justify-between px-3">
          <div>{opponent === "" ? "unknown" : opponent}</div>
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
        <div className="bg-[#494F55] rounded-b-md h-10 text-xl text-[#BABCBE] flex items-center justify-between px-3">
          <div>{username}</div>
          <div>5:00</div>
        </div>
      </div>

      {opponent === "" ? (
        sudoChallanger === "" ? (
          <div className="w-3/12 ml-10 h-[200px] rounded-lg bg-[#BABCBE] flex-1 flex flex-col justify-between items-center ">
            <div className="text-xl w-full h-10 flex items-center justify-center rounded-t-lg bg-[#494F55] text-[#BABCBE]">
              Create Challange
            </div>
            <div className="w-full flex justify-center items-center px-2">
              <input
                placeholder="Enter opponent's username"
                className="rounded-md h-8 mx-3 px-2 w-full"
                value={sudoOpponent}
                onChange={(e) => {
                  setUsername(username);
                  setSudoOpponent(e.target.value);
                }}
              />
            </div>
            <div className="w-full flex justify-center mb-5">
              <button
                className="py-1 rounded-md w-1/2 bg-[#494F55] hover:bg-[#535353] text-[#BABCBE]"
                onClick={sendChallange}
              >
                Create
              </button>
            </div>
          </div>
        ) : (
          <div className="w-3/12 ml-10 h-[200px] rounded-lg bg-[#BABCBE] flex-1 flex flex-col justify-between items-center ">
            <div className="text-xl w-full h-10 flex items-center justify-center rounded-t-lg bg-[#494F55] text-[#BABCBE]">
              Accept Challange from {sudoChallanger}
            </div>
            <div>
              <button onClick={acceptChallange}>Accept</button>
              <button>Decline</button>
            </div>
          </div>
        )
      ) : (
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
                    <span className="px-1 bg-[#C0C0C0] w-[30px]">
                      {move.id}.
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
          </div>
          <div className="rounded-t-lg h-[30px] mb-[1px]">
            <div className="flex flex-row h-full [&>div>button]:rounded-t-lg [&>div>button]:w-full [&>div>button]:h-full [&>div]:h-full [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:cursor-pointer [&>div]:text-[#BABCBE] [&>div]:rounded-t-lg ">
              <div className="mr-[0.5px] bg-[#494F55] hover:bg-[#535353]">
                <button>Backward</button>
              </div>
              <div className="ml-[0.5px] bg-[#494F55] hover:bg-[#535353]">
                <button>Forward</button>
              </div>
            </div>
          </div>
          <div className="rounded-b-lg h-[30px]">
            <div className="flex flex-row h-full [&>div>button]:rounded-b-lg [&>div>button]:w-full [&>div>button]:h-full [&>div]:h-full [&>div]:w-1/2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:cursor-pointer [&>div]:text-[#BABCBE] [&>div]:rounded-b-lg ">
              <div className="mr-[0.5px] bg-[#494F55] hover:bg-[#535353]">
                <button>Draw</button>
              </div>
              <div className="ml-[0.5px] bg-[#494F55] hover:bg-[#535353]">
                <button>Resign</button>
              </div>
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
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyPress={(e) => {
                sendMessage(e);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
