import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import { Link, useNavigate } from "react-router-dom";
import google_image from "../../../google.svg";

export default function Signup(props) {
  const { setUser } = props;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }, [navigate]);

  const registerHandler = async (e) => {
    // console.log(process.env.REACT_APP_BACKEND_URL);
    console.log(error);
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // if (password !== confirmPassword) {
    //   setPassword("");
    //   setConfirmpassword("");
    //   setTimeout(() => {
    //     setError("");
    //   }, 5000);
    //   return setError("Passwords do not match");
    // }

    let username = "";

    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") break;
      username += email[i];
    }

    // console.log(username, email, password);

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.setItem("authToken", data.token);

      const fetchPrivateData = async () => {
        const config = {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await axios.get("/api/private", config);
          console.log("signin", data);
          setUser(data);
        } catch (error) {
          localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      };
      fetchPrivateData();

      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const showPasswordButton = () => {
    setShowPassword(!showPassword);
  };

  const googleAuth = () => {
    // window.open(
    //   `${process.env.REACT_APP_API_URL}/auth/google/callback`,
    //   "_self"
    // );
  };

  return (
    <section className="bg-[#5f6368] flex items-center justify-center w-screen h-screen">
      <div className="bg-[#BABCBE] flex rounded-2xl shadow-lg max-w-3xl p-5 justify-center items-center">
        <div className="md:w-1/2 p-16">
          <h2 className="font-bold text-2xl">Signup</h2>
          <p className="text-sm mt-4">If you already a member, easily login</p>
          <form onSubmit={registerHandler} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <svg
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                onClick={showPasswordButton}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={showPassword ? "#87CEEB" : "currentColor"}
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Signup
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-black">
            <hr className="border-black" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-black" />
          </div>

          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center  hover:scale-105 duration-300"
            onClick={googleAuth}
          >
            <img className="w-6 h-6 mr-3" src={google_image} alt="" />
            Signup with Google
          </button>

          <div className="mt-9">
            <p className="mb-4 text-xs hover:text-blue-400 hover:cursor-pointer inline-block">
              Forgot your password?
            </p>
            <hr className="border-black" />
          </div>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p>Already have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl  hover:scale-110 duration-300">
              <Link to="/signin">Signin</Link>
            </button>
          </div>
        </div>
        <div className="w-1/2 md:block hidden">
          <img
            className="rounded-2xl"
            src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
