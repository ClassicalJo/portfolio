import React from 'react'
import gh from './gh.png'
import fb from './fb.png'
import ld from './ld.png'
import at from './at.png'

const Navbar = (props) => {
    return (
        <ul className="navBar">
            <li onClick={props.onClickItems}><span>Home</span></li>
            <li onClick={props.onClickAbout}><span>About me</span></li>
            <li onClick={props.onClickResume}><span>Resume</span></li>
            <li onClick={props.onClickContact}><span>Contact</span></li>
            <span className="mediaLinks">
                <a
                    href="https://www.facebook.com/barrientos.jose.benjamin"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span><img src={fb} alt="Facebook" /></span>
                </a>
                <a
                    href="https://www.linkedin.com/in/jose-barrientos-324361146/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span><img src={ld} alt="LinkedIn" /></span>
                </a>
                <a
                    href="mailto:jb.barrientos@yahoo.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span><img src={at} alt="E-mail" /></span>
                </a>
                <a
                    href="https://github.com/ClassicalJo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span><img src={gh} alt="Github" /></span>
                </a>
            </span>

        </ul>
    )
}

export default Navbar