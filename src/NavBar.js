import React from 'react'
import { Link } from "react-router-dom"

let NavBar = () => {
    return (
        <ul className="nav-bar">
            <Link to="."><span>.home()</span></Link>
            <Link to="/resume"><span>.resume()</span></Link>
            <Link to="/projects"><span>.projects()</span></Link>
            <Link to="/hire"><span>.hire()</span></Link>
            <a href="https://github.com/classicaljo/" rel="noopener noreferrer" target="_blank"><span>.github()</span></a>
        </ul >
    )
}

export default NavBar
