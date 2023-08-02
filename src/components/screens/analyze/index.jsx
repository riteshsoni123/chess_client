import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";
import unknown from "../../../unknown.jpeg";
import PieChart from "./Piechart";

function Analyze(props) {
  const { overall, white, user, setUser, setOverall, setWhite } = props;
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  // console.log(overall, white);

  useEffect(() => {
    if (user.username !== undefined) {
      return;
    } else if (localStorage.getItem("authToken")) {
      // console.log("data fetched");
      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);

          // console.log("analyze", data);
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
  }, [user, setOverall, setUser, setWhite]);

  useEffect(() => {
    if (user.username === undefined) return;
    // console.log("useEffect ran");
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          contentType: "application/json",
        },
      };
      try {
        const { data } = await axios.get(
          `/game/getGameList/${user.username}`,
          config
        );
        // console.log(data);
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrivateData();
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

  const gameClicked = (index) => {
    // console.log(index);
    navigate("/replay", { state: games[index] });
  };

  return (
    <div className="container mx-auto w-2/5 [&>div]:shadow-2xl [&>div]:bg-[#BABCBE]">
      <div className=" flex items-center justify-around h-96 rounded-b-lg mb-10">
        <div className="w-1/4 border-[1px] border-white shadow-xl rounded-lg">
          <img className="rounded-lg" src={unknown} alt="" />
        </div>
        <div className="w-2/4 [&>div]:mt-5">
          <div>
            <div className="text-black text-3xl">{user.username}</div>
            <div className="text-[#808080] text-2xl">
              {user.firstname + " " + user.lastname}
            </div>
          </div>
          <div>
            <div className="font-bold">About me:</div>
            <div className="font-light">
              {/* Love playing chess. Fell in love with the complexity of the game.
              I always look for challanges and try to be creative in the game. I
              also feel that it is the sport for everyone */}
              {user.aboutme}
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
      <div className="rounded-t-lg [&>div]:flex [&>div]:justify-between mb-10">
        <p className="bg-[#727272] h-10 rounded-t-lg text-2xl text-white flex justify-center items-center">
          Completed Games
        </p>
        <div className=" bg-[#686868] h-10 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:text-white">
          <div className="w-2/6">Players</div>
          <div className="w-1/6">Result</div>
          <div className="w-1/6">Moves</div>
          <div className="w-2/6">Date</div>
        </div>
        {games.map((game, index) => {
          return (
            <div
              key={index}
              className="[&>div]:flex [&>div]:flex-col [&>div]:items-center border-b-[1px] border-black hover:bg-[#727272] cursor-pointer p-2"
              onClick={() => gameClicked(index)}
            >
              <div className="w-2/6">
                <div>{game.first}</div>
                <div>{game.second}</div>
              </div>
              <div className="w-1/6">
                <div>{game.first_res}</div>
                <div>{game.second_res}</div>
              </div>
              <div className="w-1/6">{game.moves}</div>
              <div className="w-2/6">{game.date.substring(0, 10)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Analyze;
