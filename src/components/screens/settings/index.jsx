import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import unknown from "../../../unknown.jpeg";

function Settings(props) {
  const { user, setUser } = props;
  const [key, setKey] = useState("");
  const [editValue, setEditValue] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    first: "",
    lastname: "",
    email: "",
    location: "",
    country: "",
    language: "",
    twitter: "",
    faceBook: "",
    instagram: "",
    aboutme: "",
  });

  useEffect(() => {
    if (user.username !== undefined) {
      setUserData({
        _id: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        location: user.location,
        country: user.country,
        language: user.language,
        twitter: user.twitter,
        facebook: user.facebook,
        instagram: user.instagram,
        aboutme: user.aboutme,
      });
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
          console.log("settings", data);
          setUser(data);
        } catch (error) {
          localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      };
      fetchPrivateData();
    }
  }, [user]);

  const user_default = {
    username: "Your username",
    firstname: "What is you first name?",
    lastname: "What is your second name?",
    email: "What is your email address?",
    location: "Where do you live?",
    country: "What is your nationality?",
    language: "What are the languages that you speek?",
    twitter: "Add your twitter URL",
    facebook: "Add your facebook URL",
    instagram: "Add your instagram URL",
    aboutme: "Tell us something about yourself",
  };

  const basic_info = [
    "username",
    "firstname",
    "lastname",
    "email",
    "location",
    "country",
    "language",
    "twitter",
    "facebook",
    "instagram",
    "aboutme",
  ];

  const editClicked = (key) => {
    console.log(key, userData[key]);
    setKey(key);
    setEditValue(userData[key]);
  };

  const saveButton = async () => {
    // const tempUser = user;
    userData[key] = editValue;

    setUserData(userData);
    setUser(userData);
    const config = {
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      const url = `/api/private/editdetail/${userData._id}`;
      await axios.post(url, userData, config);
    } catch (error) {
      console.log(error);
    }

    setKey("");
    setEditValue("");
  };

  const cancelButton = () => {
    setKey("");
    setEditValue("");
  };

  return (
    <div className="container mx-auto w-2/5 [&>div]:bg-[#BABCBE] [&>div]:shadow-2xl">
      <div className="flex items-center justify-around h-96 rounded-b-lg mb-10">
        <div className="w-1/4 border-2 border-white rounded-lg">
          <img className="rounded-lg" src={unknown} alt="" />
        </div>
        <div className="w-2/4 [&>div]:mt-5">
          <div>
            <div className="text-black text-3xl">riteshsoni123</div>
            <div className="text-[#808080] text-2xl">Ritesh Soni</div>
          </div>
          <div>
            <div className="font-bold">About me:</div>
            <div className="font-light">
              {/* Love playing chess. Fell in love with the complexity of the game.
              I always look for challanges and try to be creative in the game. I
              also feel that it is the sport for everyone */}
              {userData.aboutme}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-lg">
        <div className="bg-[#727272] rounded-t-lg flex justify-center items-center">
          <h1 className="my-3 text-white font-bold text-3xl flex items-center justify-center">
            Basic Info
          </h1>
        </div>
        <div className="[&>div]:mt-2 [&>div]:flex [&>div]:justify-between [&>div]:border-b-[1px] [&>div]:border-black [&>div]:p-2">
          {basic_info.map((element) => {
            return key === element ? (
              <div key={element}>
                <span className="w-1/4 ml-5">
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </span>
                <input
                  className=" w-2/4 border-2 rounded-lg p-1 mr-2"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <div className="w-1/4 [&>button]:rounded-lg [&>button]:mr-2 [&>button]:w-1/2 flex">
                  <button className="bg-blue-500" onClick={() => saveButton()}>
                    Save
                  </button>
                  <button
                    className="bg-[#918d8d]"
                    onClick={() => cancelButton()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={element}
                className="[&>p]:cursor-pointer [&>p]:w-10 [&>p]:mr-5 [&>p]:flex [&>p]:justify-center"
              >
                <span className="w-1/4 ml-5 font-bold">
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </span>
                <span
                  className={
                    userData[element] === ""
                      ? "text-[#808080] w-2/4"
                      : "" + "w-2/4"
                  }
                >
                  {userData[element] === ""
                    ? user_default[element]
                    : userData[element]}
                </span>
                {element === "username" || element === "email" ? (
                  <p className="text-[#727272]">Edit</p>
                ) : (
                  <p
                    className="text-blue-600"
                    onClick={() => editClicked(element)}
                  >
                    Edit
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Settings;
