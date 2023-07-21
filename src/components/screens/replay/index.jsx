import React, { useEffect } from "react";
import Position from "./Position";

function Replay() {
  const moves_index = [
    {
      id: 1,
      si: 7,
      sj: 7,
      ei: 5,
      ej: 7,
    },
    {
      id: 2,
      si: 0,
      sj: 0,
      ei: 2,
      ej: 0,
    },
    {
      id: 3,
      si: 7,
      sj: 6,
      ei: 5,
      ej: 6,
    },
    {
      id: 4,
      si: 0,
      sj: 1,
      ei: 2,
      ej: 1,
    },
    {
      id: 5,
      si: 7,
      sj: 5,
      ei: 5,
      ej: 5,
    },
    {
      id: 6,
      si: 0,
      sj: 2,
      ei: 2,
      ej: 2,
    },
    {
      id: 7,
      si: 7,
      sj: 4,
      ei: 5,
      ej: 4,
    },
  ];

  useEffect(() => {
    // console.log(moves_index);
  }, []);

  return (
    <div>
      <Position moves_index={moves_index} />
    </div>
  );
}

export default Replay;