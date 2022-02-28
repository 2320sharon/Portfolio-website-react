import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Developer",
        "Python Developer",
        "Software Engineer",
        "Blogger",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="imgCenter">
            <img src="assets/me2.png" id="me_png" alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="textContainer">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Sharon Fitzpatrick</h1>
            <h3>
              Freelance <span ref={textRef}></span>{" "}
            </h3>
          </div>
          <div className="aboutme">
            <p>
              Hey there! I recently graduated college with a 3.9 GPA where I
              just finished developing a mobile app for UC Davis Health. I
              specialize in web development with React and development with
              Python. I'm currently building research applications using Python
              for the USGS.
            </p>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
