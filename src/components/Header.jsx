import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <ul>
        <li className="flex items-center">
          <NavLink to="/">
            <img
              src="https://d1q5p2nadm4152.cloudfront.net/public/images/logo.svg"
              alt=""
            />
          </NavLink>
        </li>
        <li className="none">
          products{" "}
          <img
            src="https://d1q5p2nadm4152.cloudfront.net/public/images/icons/menu-open.svg"
            alt=""
          />
        </li>
        <li className="none">chatsonic</li>
        <li className="none">botsonic</li>
        <li className="none">
          pricing{" "}
          <img
            src="https://d1q5p2nadm4152.cloudfront.net/public/images/icons/menu-open.svg"
            alt=""
          />
        </li>
        <li className="btn none">sign in</li>
        <NavLink to="Login">
          {" "}
          <li className="btn active">get started</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
