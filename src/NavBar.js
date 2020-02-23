import React from 'react'
import { Link } from "react-router-dom"
import { Event } from "./App"

let NavBar = () => {
    return (
        <ul className="nav-bar">
            <Link to="/portfolio/"><span>.home()</span></Link>
            <Link to="/portfolio/resume"><span>.resume()</span></Link>
            <Link to="/portfolio/projects"><span>.projects()</span></Link>
            <Link to="/portfolio/hire"><span>.hire()</span></Link>
            <a href="https://github.com/classicaljo/" onClick={()=> Event("GITHUB", "Clicked the link to my github page", "Navbar")} rel="noopener noreferrer" target="_blank"><span>.github()</span></a>
        </ul >
    )
}

export default NavBar
