import { Routes, Route, Navigate } from "react-router-dom";
import Settings from "./components/screens/settings";
import GameMovements from "./components/GameMovements";
import Login from "./components/screens/signin";
import Signup from "./components/screens/signup";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<GameMovements />} /> */}
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;