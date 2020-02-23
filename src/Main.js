import React from 'react'
import Home from './sections/Home'
import Projects from "./sections/Projects"
import Resume from "./sections/Resume"
import Hire from "./sections/Hire"
import { Switch, Route, Redirect } from "react-router-dom"

let Main = () => {
    return (
        <div className="main-container">
            <Switch>
                <Route path="/portfolio/projects"><Projects /></Route>
                <Route path="/portfolio/resume"><Resume /></Route>
                <Route path="/portfolio/hire"><Hire /></Route>
                <Route path="/portfolio/"><Home /></Route>
                <Redirect from="/" to="/portfolio/" />
            </Switch>
        </div>
    )
}

export default Main
