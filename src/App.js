import { Routes, Route, Navigate } from "react-router-dom";
import Settings from "./components/screens/settings";
import GameMovements from "./components/GameMovements";
import Login from "./components/screens/signin";
import Signup from "./components/screens/signup";
import Analyze from "./components/screens/analyze";
import Replay from "./components/screens/replay";
import Sidebar from "./components/screens/sidebar";

function App() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<GameMovements />} />
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
