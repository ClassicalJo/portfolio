import React from 'react'
import NavBar from './NavBar'
import Logo from "./images/Logo"

let Header = (props) => {
    return (
        <div className="header">
            <div className="logo-wrapper"><Logo /></div>
            <div className="header-wrapper">
                <span className="title-wrapper">
                    <h1>ClassicalJo</h1>
                    <h2>>> portfolio.create()</h2>
                </span>
            </div>
            <NavBar onClick={props.onClick}></NavBar>
        </div>
    )
}
export default Header
