import React from "react";
import "./testmonials.scss";

function testmonials() {
  const data = [
    {
      id: 1,
      name: "United Home Brands",
      title: "February 2022",
      img: "assets/UHB_Square.png",
      link: "https://github.com/2320sharon",
      icon: "assets/github.png",
      desc: [
        <li>User Testing</li>,
        <li>Competitor Analysis</li>,
        <li>Landing Page optimization</li>,
      ],
    },
    {
      id: 2,
      name: "USGS",
      title: "May 2021 to Present",
      img: "assets/usgs_black_white-removebg.png",
      link: "https://github.com/dbuscombe-usgs/CoastSeg",
      icon: "assets/github.png",
      desc: [
        <li>Python Development</li>,
        <li>Pytest Testing Framework</li>,
        <li> Converted non-technical customer requirements to code</li>,
        <li>Worked on global open source projects</li>,
      ],
      featured: true,
    },
    {
      id: 3,
      name: "UC Davis Heath",
      title: "January 2021 to December 2021",
      img: "assets/uchealth.png",
      link: " https://github.com/Final-Iteration/DigitalDavis",
      icon: "assets/github.png",
      desc: [
        <li> React Native iphone app </li>,
        <li>Directed by CIO of UC Davis</li>,
        <li>Industry standard app by 8 developers</li>,
        <li>Used Docker, Git, Node, React Native, Jest </li>,
      ],
    },
  ];
  return (
    <div className="testmonials" id="testmonials">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img className="user" src={d.img} alt="" />
              <a href={d.link}>
                <img src={d.icon} className="right" alt="" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default testmonials;
