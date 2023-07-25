import React, { useState } from "react";
import unknown from "../../../unknown.jpeg";

function Settings() {
  const [key, setKey] = useState("");
  const [editValue, setEditValue] = useState("");
  // const [user, setUser] = useState({
  //   username: data.user.username,
  //   location: !data.user.location ? "" : data.user.location,
  //   summary: !data.user.summary ? "" : data.user.summary,
  //   website: !data.user.website ? "" : data.user.website,
  //   github: !data.user.github ? "" : data.user.github,
  //   linkedin: !data.user.linkedin ? "" : data.user.linkedin,
  //   twitter: !data.user.twitter ? "" : data.user.twitter,
  //   work: !data.user.work ? "" : data.user.work,
  //   education: !data.user.education ? "" : data.user.education,
  //   skill: !data.user.skill ? "" : data.user.skill,
  // });

  const [user, setUser] = useState({
    Username: "",
    "First Name": "",
    "Last Name": "",
    "Emaill address": "",
    Location: "",
    Country: "",
    Language: "",
    Twitter: "",
    FaceBook: "",
    Instagram: "",
    Summary: "",
  });

  const user_default = {
    Username: "Your username",
    "First Name": "What is you first name?",
    "Last Name": "What is your second name?",
    "Emaill address": "What is your email address?",
    Location: "Where do you live?",
    Country: "What is your nationality?",
    Language: "What are the languages that you speek?",
    Twitter: "Add your twitter URL",
    FaceBook: "Add your facebook URL",
    Instagram: "Add your instagram URL",
    Summary: "Tell us something about yourself",
  };

  const basic_info = [
    "Username",
    "First Name",
    "Last Name",
    "Emaill address",
    "Location",
    "Country",
    "Language",
    "Twitter",
    "FaceBook",
    "Instagram",
    "Summary",
  ];

  const editClicked = (key) => {
    console.log(key, user[key]);
    setKey(key);
    setEditValue(user[key]);
  };

  const saveButton = async () => {
    // user[key] = editValue;
    // setUser(user);
    // console.log(user);
    // const config = {
    //   headers: {
    //     contentType: "application/json",
    //   },
    // };
    // try {
    //   const url = `${process.env.REACT_APP_API_URL}/auth/editdetail/${data.user._id}`;
    //   await axios.post(url, user, config);
    // } catch (error) {
    //   console.log(error);
    // }
    // setKey("");
    // setEditValue("");
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
              Love playing chess. Fell in love with the complexity of the game.
              I always look for challanges and try to be creative in the game. I
              also feel that it is the sport for everyone
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
        <div className="[&>div]:mt-2 [&>div]:flex [&>div]:justify-between [&>div]:border-b-[1px] [&>div]:border-black [&>div]:p-2 [&>div>p]:text-blue-600 [&>div>p]:cursor-pointer [&>div>p]:text-right">
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
              <div key={element}>
                <span className="w-1/4 ml-5 font-bold">
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </span>
                <span className="w-2/4">
                  {user[element] === "" ? user_default[element] : user[element]}
                </span>
                <p className="w-1/4 mr-5" onClick={() => editClicked(element)}>
                  Edit
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Settings;
