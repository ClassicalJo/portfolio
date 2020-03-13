import React from 'react'
import Home from './main/Home'
import Projects from "./main/Projects"
import Resume from "./main/Resume"
import Hire from "./main/Hire"
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
