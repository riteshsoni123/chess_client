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
  const [username, setUsername] = useState();

  useEffect(() => {
    console.log("useEffect ran");
    if (localStorage.getItem("authToken")) {
      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);
          setUsername(data.username);
        } catch (error) {
          localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      };
      fetchPrivateData();
    }
  }, [username]);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Play username={username} setUsername={setUsername} />}
        />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/analyze" element={<Analyze />} />
        <Route exact path="/replay" element={<Replay />} />
      </Routes>
    </div>
  );
}

export default App;
