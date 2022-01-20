import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {useEffect, useState} from "react";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";

function Portfolio() {
    const [selected,Setselected]=useState("featured")
    const [data,Setdata]=useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ];
    useEffect(() => {
        switch(selected){
            case"featured": 
            Setdata(featuredPortfolio)
            break;
            case"web": 
            Setdata(webPortfolio)
            break;
            case"moblie": 
            Setdata(mobilePortfolio)
            break;
            case"design": 
            Setdata(designPortfolio)
            break;
            case"content": 
            Setdata(contentPortfolio)
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
                        <h3>{d.title  }</h3>
                        </div>   
                    ))}
                    
                </div>
            
        </div>
    )
}

export default Portfolio
