import React from "react";
import { useLocation } from "react-router-dom";
import Position from "./Position";

function Replay() {
  const location = useLocation();
  const { first, second, first_res, second_res, moves_index } = location.state;

  return (
    <div className="container mx-auto">
      <Position
        moves_index={moves_index}
        first={first}
        second={second}
        first_res={first_res}
        second_res={second_res}
      />
    </div>
  );
}

export default Replay;
