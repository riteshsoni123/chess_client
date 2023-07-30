import React, { useEffect } from "react";
import axios from "../../../axios";
import unknown from "../../../unknown.jpeg";
import PieChart from "./Piechart";

function Analyze(props) {
  const { overall, white, user, setUser, setOverall, setWhite } = props;
  // console.log(overall, white);

  useEffect(() => {
    if (user.username !== undefined) {
      return;
    } else if (localStorage.getItem("authToken")) {
      console.log("data fetched");
      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);
          console.log("analyze", data);
          setUser(data);
          setOverall(data.overall);
          setWhite(data.white);
        } catch (error) {
          localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      };
      fetchPrivateData();
    }
  }, [user]);

  const overall_data = {
    labels: ["Won", "Lost", "Drawn"],
    datasets: [
      {
        data: [
          overall.won,
          overall.lost,
          overall.played - overall.won - overall.lost,
        ],
        backgroundColor: ["#7393B3", "#848884", "#E5E4E2"],
      },
    ],
  };
  const white_data = {
    labels: ["Won", "Lost", "Drawn"],
    datasets: [
      {
        data: [white.won, white.lost, white.played - white.won - white.lost],
        backgroundColor: ["#7393B3", "#848884", "#E5E4E2"],
      },
    ],
  };
  const black_data = {
    labels: ["Won", "Lost", "Drawn"],
    datasets: [
      {
        data: [
          overall.won - white.won,
          overall.lost - white.lost,
          overall.played -
            overall.won -
            overall.lost -
            (white.played - white.won - white.lost),
        ],
        backgroundColor: ["#7393B3", "#848884", "#E5E4E2"],
      },
    ],
  };

  const games = [
    {
      key: 1,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 2,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 3,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 4,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 5,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 6,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 7,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
    {
      key: 8,
      first: "riteshsoni123",
      second: "vicky4",
      first_res: 1,
      second_res: 0,
      moves: 30,
      date: "13/02/2024",
    },
  ];

  return (
    <div className="container mx-auto w-2/5 [&>div]:shadow-2xl [&>div]:bg-[#BABCBE]">
      <div className=" flex items-center justify-around h-96 rounded-b-lg mb-10">
        <div className="w-1/4 border-[1px] border-white shadow-xl rounded-lg">
          <img className="rounded-lg" src={unknown} alt="" />
        </div>
        <div className="w-2/4 [&>div]:mt-5">
          <div>
            <div className="text-black text-3xl">riteshsoni123</div>
            <div className="text-[#808080] text-2xl">Ritesh Soni</div>
          </div>
          <div>
            <div className="font-bold">About me:</div>
            <div className="font-light">
              Love playing chess. Fell in love with the complexity of the game.
              I always look for challanges and try to be creative in the game. I
              also feel that it is the sport for everyone
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div>h1]:text-3xl mb-10 [&>div>h1]:w-full [&>div>h1]:flex [&>div>h1]:justify-center [&>div>h1]:items-start [&>div>h1]:rounded-t-xl [&>div>h1]:bg-[#727272] [&>div>h1]:text-white">
        <div>
          <h1 className="">Overall Stats</h1>
          <PieChart data={overall_data} />
        </div>
        <div>
          <h1>Played as white</h1>
          <PieChart data={white_data} />
        </div>
        <div>
          <h1>Played as black</h1>
          <PieChart data={black_data} />
        </div>
      </div>
      <div className="rounded-t-lg [&>div]:flex [&>div]:justify-between">
        <p className="bg-[#727272] h-10 rounded-t-lg text-2xl text-white flex justify-center items-center">
          Completed Games
        </p>
        <div className=" bg-[#686868] h-10 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
          <div className="w-2/6">Players</div>
          <div className="w-1/6">Result</div>
          <div className="w-1/6">Moves</div>
          <div className="w-2/6">Date</div>
        </div>
        {games.map((game) => {
          return (
            <div
              key={game.key}
              className="[&>div]:flex [&>div]:flex-col [&>div]:items-center border-b-[1px] border-black p-2"
            >
              <div className="w-2/6">
                <div>riteshsoni123</div>
                <div>vicky4</div>
              </div>
              <div className="w-1/6">
                <div>1</div>
                <div>0</div>
              </div>
              <div className="w-1/6">30</div>
              <div className="w-2/6">13/02/2024</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Analyze;
