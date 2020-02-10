import React from 'react'

let NavBar = (props) => {
    return (
        <ul className="nav-bar">
            <span onClick={() => props.onClick("home")} ><li >.home()</li></span>
            <span onClick={() => props.onClick("resume")} ><li >.resume()</li></span>
            <span onClick={() => props.onClick("projects")} ><li >.projects()</li></span>
            <span onClick={() => window.open("https://github.com/classicaljo/", "_blank", "noopener noreferrer")}><li>.github()</li></span>
            <span onClick={() => props.onClick("hire")} ><li >.hire()</li></span>
        </ul>
    )
}

export default NavBar
