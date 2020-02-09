import React from 'react'
import Home from './Home'
import Projects from "./Projects"
import Resume from "./Resume"
import Hire from "./Hire"

let Main = (props) => {
    return (
        <div className="main-container">
            {props.currentlyShowing === "home" && <Home showIntro={props.showIntro} commands={props.commands} />}
            {props.currentlyShowing === "projects" && <Projects />}
            {props.currentlyShowing === "resume" && <Resume />}
            {props.currentlyShowing === "hire" && <Hire/>}
        </div>
    )
}

export default Main