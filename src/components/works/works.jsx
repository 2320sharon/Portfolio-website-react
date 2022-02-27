import React from "react";
import { useState } from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/github.png",
      title: "Digital Davis App",
      desc: "I  worked with 7 other developers to build a react native app for UC Davis Health. We used docker to create the developer environment, MongoDB as the database, and  JWT tokens for login credentials.",
      img: "./assets/UCD_works_12.png",
    },
    {
      id: "2",
      icon: "./assets/github.png",
      title: "USGS : CoastSeg Project",
      desc: "I'm building an interactive mapping app in python that allows researchers to select regions to download satellite data. The user draws a bounding box then the regions where they can download data are generated along the coast so that overlap is ensured. Additionally, I’m building a testing framework with Pytest and solved issues in an open source manner on GitHub. ",
      img: "./assets/coastseg6.gif",
    },
    {
      id: "3",
      icon: "./assets/github.png",
      title: "Computer Science Degree",
      desc: "I graduated with a GPA 3.9 in Computer Science in December 2021.",
      img: "./assets/250px-Sac_State_North_Entrance.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    //   Left is more because we are multiplying it by -100
    //   if the way is left then attempt to move the current slide down, but if we go below 0.
    // Then reset to the beginning aka 2
    // If the way is not left then attempt to move the current slider right by increasing slide
    // value but if it exceeds the data.length then reset to the beginning 0.
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <div className="textContainer">
                    <p>{d.desc}</p>
                  </div>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default Works;
