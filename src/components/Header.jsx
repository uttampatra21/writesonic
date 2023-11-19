import React from "react";

const Header = () => {
  return (
    <div id="header">
      <ul>
        <li className="flex items-center">
          <img
            src="https://d1q5p2nadm4152.cloudfront.net/public/images/logo.svg"
            alt=""
          />
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
        <li className="btn active">get started</li>
      </ul>
    </div>
  );
};

export default Header;
