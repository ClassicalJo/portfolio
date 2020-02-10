import React from 'react'
import HomeText from './HomeText'
import "./assets/css/home.css"
import Windmill from './Windmill'

let Home = (props) => {
    return (
        <div className="home">
            <Windmill/>
            <HomeText showIntro={props.showIntro} commands={props.commands}/>
        </div>
    )
}

export default Home
