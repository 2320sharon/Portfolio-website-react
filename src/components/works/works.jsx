import React from "react";
import { useState } from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Digital Davis App",
      desc: "I  worked with 7 other developers to build a react native app for UC Davis Health. We used docker to create the developer environment, MongoDB as the database, and  JWT tokens for login credentials.",
      img: "./assets/UCD_works_12.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Data Analyst",
      desc: "I've built data visulizations and performed data analysis with Python ",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Computer Science Degree",
      desc: "I graduated with a GPA 3.9 in Computer Science in December 2021.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
                  {/* <div className="imgContainer"> */}
                  {/* <img src={d.icon} alt="" /> */}
                  {/* </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
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
