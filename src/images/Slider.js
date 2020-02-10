import React from 'react'

let Slider = (props) => {
    return (
        <div className="slider">
            <svg height="20" width="100%">
                <line y1="50%" x1="0%" x2="100%" y2="50%" stroke="white" strokeWidth="4"></line>
                <line y1="50%" x1="0%" x2={props.progress} y2="50%" stroke="#306BAC" strokeWidth="4"></line>
            </svg>
        </div>
    )
}
export default Slider
