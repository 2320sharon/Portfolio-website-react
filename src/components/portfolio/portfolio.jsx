import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {useEffect, useState} from "react";

function Portfolio() {
    const [selected,Setselected]=useState("featured")
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
    ]

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
                <ul>

              {list.map(item=> (<PortfolioList title={item.title} active = {selected === item.id} Setselected={Setselected} id={item.id}/>))}
                    
                </ul>
                <div className="container">
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                    <div className="item">
                        <img src="https://i.pinimg.com/564x/22/9b/ca/229bca86ffd643ed7e5669fdff422ee6.jpg" alt="" />
                        <h3>Banking App</h3>
                    </div>
                </div>
            
        </div>
    )
}

export default Portfolio
