import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="fixed bg-[#4D4D4D] h-screen w-48">
        <div className="absolute [&>div]:border-b-[1px] [&>div]:border-white">
          <Link
            className="border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/"
          >
            Chess
          </Link>
          <Link
            className="border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/"
          >
            Play
          </Link>
          <Link
            className="border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/analyze"
          >
            Analyze
          </Link>
          <Link
            className="border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/settings"
          >
            Profile
          </Link>
          <Link
            className="border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/settings"
          >
            Settings
          </Link>
        </div>
        <div className="absolute bottom-0 [&>div]:border-t-[1px] [&>div]:border-white">
          <Link
            className="border-t-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/"
          >
            Dark Theme
          </Link>
          <Link
            className="border-t-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/signup"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
