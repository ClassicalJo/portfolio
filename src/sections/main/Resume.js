import React from "react"
import Slider from "../../images/svg/Slider"

let Resume = () => {
    return (
        <div className="section resume">
            <h1>Skillset:</h1>
            <div className="skillset">
                <div className="front-end">
                    <div className="skillblock">
                        <h2>Front-end</h2>
                        <ul className="frameworks">
                            <span><li> Javascript (ES6)</li><Slider progress="80%" /></span>
                            <span><li> React</li><Slider progress="70%" /></span>
                            <span><li> Typescript</li><Slider progress="45%" /></span>
                        </ul>
                    </div>
                    <div className="skillblock">
                        <h2>CSS</h2>
                        <ul className="css">
                            <span><li>CSS3</li><Slider progress="70%" /></span>
                            <span><li>SASS</li><Slider progress="60%" /></span>
                            <span><li>Post-CSS</li><Slider progress="25%" /></span>
                        </ul>
                    </div>
                </div>

                <div className="others">
                    <div className="skillblock">
                        <h2>Version control</h2>
                        <ul>
                            <span><li>Git</li><Slider progress="40%" /></span>
                        </ul>
                    </div>

                    <div className="skillblock">
                        <h2>Testing</h2>
                        <ul>
                            <span><li>Jest</li><Slider progress="20%" /></span>
                        </ul>
                    </div>

                    <div className="skillblock">
                        <h2>Back-end</h2>
                        <ul className="back-end">
                            <span><li>Node.js</li><Slider progress="50%" /></span>
                            <span><li>MySQL</li><Slider progress="50%" /></span>
                        </ul>
                    </div>
                </div>
            </div >

            <div className="work-history">
                <div className="work-history-wrapper">
                    <h1>Work history: </h1>
                    <h2>>> University of Buenos Aires</h2>
                    <p className="italic">Professor assistant | 2017-2018</p>
                    <p>Provided pro-bono legal advice as part of a team promoted by the Faculty of Law.</p>

                    <h2>>> PAMI - Argentina</h2>
                    <p className="italic">Front desk - Executive Management | 2007-2017</p>
                    <p>Reception, analysis and processing of documentation addressed to the highest authority of the organism.</p>
                </div>
            </div>
        </div >
    )
}
export default Resume
