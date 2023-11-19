import React, { useState } from "react";
import Testomonial from "./Testomonial";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [img, setImg] = useState(
    "https://writesonic.com/_next/image?url=https%3A%2F%2Fd1q5p2nadm4152.cloudfront.net%2Fpublic%2Fimages%2Fhome-page%2Fgmail.webp&w=1920&q=75"
  );

  return (
    <div className="home">
      <div id="container">
        <div id="hero">
          <h1 className="gradient">Generative AI Platform for</h1>
          <h1 className="">Instagram Followers, and AI Services.</h1>
          <div className="paragraph">
            SEO & AI Synergy: Create and Optimize all types of Content, Outsmart{" "}
            <br />
            Competitors by decoding their secrets and leveraging trending
            keywords <br /> to boost your organic traffic.
          </div>
          <NavLink to="Login">
            {" "}
            <div className="button">get started free</div>
          </NavLink>
        </div>
      </div>

      <div id="trust" className="text-center p-10">
        <span className="bg-border">TRUSTED BY 5,000,000+</span>{" "}
        <span className="opacity-60">
          {" "}
          TEAMS, AGENCIES AND FREELANCERS. 15,000+ 5-STAR RATINGS.
        </span>
      </div>

      <div id="container" className="multiple-aplication">
        <h1 className="">One platform</h1>
        <h1 className="gradient">multiple AI applications</h1>
        <img
          src="https://writesonic.com/_next/image?url=https%3A%2F%2Fd1q5p2nadm4152.cloudfront.net%2Fpublic%2Fimages%2Fhome-page%2Fscheme-home.png&w=3840&q=75"
          alt=""
        />
        <p className="text-center text-xl">
          At WS you get the best of best working services which will never let
          
          you or your clients down. We always try to give best services 
          in the market which is always working.
        </p>
      </div>

      <div id="" className="m-5">
        <div id="outlet">
          <div className="web-container flex justify-center py-20 gap-10">
            <div
              className="btn"
              onClick={() =>
                setImg(
                  "https://writesonic.com/_next/image?url=https%3A%2F%2Fd1q5p2nadm4152.cloudfront.net%2Fpublic%2Fimages%2Fhome-page%2Fgmail.webp&w=1920&q=75"
                )
              }
            >
              GMAIL
            </div>
            <div
              className="btn"
              onClick={() =>
                setImg(
                  "https://writesonic.com/_next/image?url=https%3A%2F%2Fd1q5p2nadm4152.cloudfront.net%2Fpublic%2Fimages%2Fhome-page%2Fchrome.webp&w=1920&q=75"
                )
              }
            >
              WEB
            </div>
            <div
              className="btn"
              onClick={() =>
                setImg(
                  "https://writesonic.com/_next/image?url=https%3A%2F%2Fd1q5p2nadm4152.cloudfront.net%2Fpublic%2Fimages%2Fhome-page%2Flinkedin.webp&w=1920&q=75"
                )
              }
            >
              LINDEDIN
            </div>
          </div>

          <div className="bg-change">
            <img src={img} />
          </div>
        </div>
      </div>

      <div id="testomonial">
        <Testomonial />
      </div>
    </div>
  );
};

export default Home;
