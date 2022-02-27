import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {useEffect, useState} from "react";
import {
    featuredPortfolio,
    WebDev_Portfolio,
    DataPortfolio,
  } from "../../data";

function Portfolio() {
    const [selected,Setselected]=useState("featured")
    const [data,Setdata]=useState([])
    const list = [
        {
            id: "featured",
            title: "Featured Projects",
          },
          {
            id: "web",
            title: "Web Development Skills",
          },
          {
            id: "mobile",
            title: "Data Analysis & Storage Skills",
          },
    ];
    useEffect(() => {
        switch(selected){
            case "featured": 
            Setdata(featuredPortfolio)
            break;
            case "web": 
            Setdata(WebDev_Portfolio)
            break;
            case "mobile": 
            Setdata(DataPortfolio)
            break;
            default:
                Setdata(featuredPortfolio)
        }
       
    }, [selected])

    return (
        <div className='portfolio' id = "portfolio">
            <h1>Portfolio</h1>
                <ul>
              {list.map(item=> (<PortfolioList title={item.title} active = {selected === item.id} Setselected={Setselected} id={item.id}/>))}
                    
                </ul>
                <div className="container">
                    {data.map((d)=> (
                        <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                        <a href={d.link}>View on GitHub!</a>
                        </div>   
                    ))}
                    
                </div>
            
        </div>
    )
}

export default Portfolio
