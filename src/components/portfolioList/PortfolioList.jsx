import React from 'react'
import "./PortfolioList.scss"

//Get the title prop from the mapping function in the portfolio component
function PortfolioList({id,title,active,Setselected}) {
    return (
      <li className={active ? "portfolioList active" : "portfolioList"}onClick={()=> Setselected(id)}>
          {title}
      </li>
    )
}

export default PortfolioList
