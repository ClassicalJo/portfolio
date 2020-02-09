import React from 'react'

let NavBar = (props) => {
    return (
        <ul className="nav-bar">
            <span><li onClick={props.onClick} id="home">.home()</li></span>
            <span><li onClick={props.onClick} id="resume">.resume()</li></span>
            <span><li onClick={props.onClick} id="projects">.projects()</li></span>
            <span><li onClick={()=> window.open("https://github.com/classicaljo/", "_blank", "noopener noreferrer")}>.github()</li></span>
            <span><li onClick={props.onClick} id="hire">.hire()</li></span>
            
        </ul>
    )
}

export default NavBar