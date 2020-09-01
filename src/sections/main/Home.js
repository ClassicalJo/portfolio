import React from 'react'
import NewWorld from './NewWorld'
import "../../assets/css/home.css"
import Vision from '../../images/svg/Vision'
let Home = () => {
    return (
        <div className="home">
            <NewWorld />
            <div className="extra">
                <div className="text-block">
                    <p>I'm a web developer from Argentina, currently based in Melbourne, Australia. Mostly focused on mastering javascript, react and svg.</p>
                </div>

            </div>
            <div className='vision-container'>
                <div className="vision-wrapper">
                    <Vision />
                </div>

            </div>
            <div className="extra">
                <div className="text-block">
                    <p>I'm available for work, either permanent or freelance, so feel free to contact me.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home
