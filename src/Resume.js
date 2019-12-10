import React from 'react'
import MyResume from "./resume.png"
const Resume = function () {
    return (
        <div className="resume-container">
            <img src={MyResume} alt="My resume in image form" />
        </div>
    )
}

export default Resume