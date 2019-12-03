import React from 'react'
import Resumev3 from "./resume.pdf"
const Resume = function () {
    return (
        <div className="about-container">
            <div className="about">
                <h1>Jose Barrientos</h1>
                <p><strong>2007-2017:</strong> INSSJP-PAMI Argentina. <br/> Editor and publisher of a web-zine with national scope. <a href="https://institucional.pami.org.ar/files/boletines_inssjp/08-01-16.pdf">Sample</a></p>
                <p><strong>2017-now:</strong> Lots of non-desk/non-IT jobs. <br />If by any reason you want to check my hospitality resume you can do it <a
                    href={Resumev3}
                    target="_blank"
                    rel="noopener noreferrer">
                    clicking here.</a>
                </p>
                <p>IELTS Test Score: <strong>8</strong></p><p>Writing: 7, Speaking: 7, Reading: 9, Listening: 8</p>
            </div>
        </div>
    )
}

export default Resume