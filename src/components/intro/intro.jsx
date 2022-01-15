import React from 'react'
import "./intro.scss"

function intro() {
    return (
        <div className='intro'>
           <div className="left">
                <div className="imgContainer">
                    <img src="assets/me2.png" alt="" />
                </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>
                       Hi there, I'm
                   </h2>
                   <h1>Sharon Fitzpatrick</h1>
                   <h3>Freelance <span>developer</span> </h3>
               </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="" />
               </a>
           </div>
        </div>
    )
}

export default intro
