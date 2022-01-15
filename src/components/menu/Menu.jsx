import React from 'react'
import "./Menu.scss"
// Future Upgrade: Convert the menu items into a component
// The component's function would be to close the menu when they are clicked

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={'menu '+ (menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#testmonials">Testmonials</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
