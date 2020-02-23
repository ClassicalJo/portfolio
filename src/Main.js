import React from 'react'
import Home from './sections/Home'
import Projects from "./sections/Projects"
import Resume from "./sections/Resume"
import Hire from "./sections/Hire"
import { Switch, Route } from "react-router-dom"

let Main = (props) => {
    return (
        <div className="main-container">
            <Switch>
                <Route path="/projects"><Projects /></Route>
                <Route path="/resume"><Resume /></Route>
                <Route path="/hire"><Hire /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </div>
    )
}

export default Main
