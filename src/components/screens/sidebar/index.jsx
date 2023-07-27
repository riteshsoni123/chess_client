import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signup");
  };

  return (
    <>
      <div className="fixed bg-[#4D4D4D] h-screen w-48 shadow-2xl">
        <div className="absolute [&>div]:border-b-[1px] [&>div]:border-white">
          <Link
            className="font-irish border-b-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-5xl"
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
          <div
            className="border-t-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            to="/"
          >
            Dark Theme
          </div>
          <div
            className="border-t-[1px] border-white w-48 h-16 flex justify-center items-center cursor-pointer text-white text-lg"
            onClick={signOut}
          >
            Sign Out
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
