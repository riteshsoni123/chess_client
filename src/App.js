import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "./axios";
import Settings from "./components/screens/settings";
import Play from "./components/screens/play";
import Login from "./components/screens/signin";
import Signup from "./components/screens/signup";
import Analyze from "./components/screens/analyze";
import Replay from "./components/screens/replay";
import Sidebar from "./components/screens/sidebar";

function App() {
  const [user, setUser] = useState({});
  const [overall, setOverall] = useState({});
  const [white, setWhite] = useState({});

  useEffect(() => {
    if (user.username !== undefined) {
      return;
    } else if (localStorage.getItem("authToken")) {
      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);
          console.log("app.js", data);
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
  }, [user, overall, white]);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Play username={user.username} />} />
        <Route exact path="/signin" element={<Login setUser={setUser} />} />
        <Route exact path="/signup" element={<Signup setUser={setUser} />} />
        <Route
          exact
          path="/settings"
          element={<Settings user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/analyze"
          element={
            <Analyze
              overall={overall}
              white={white}
              user={user}
              setUser={setUser}
              setOverall={setOverall}
              setWhite={setWhite}
            />
          }
        />
        <Route exact path="/replay" element={<Replay />} />
      </Routes>
    </div>
  );
}

export default App;
