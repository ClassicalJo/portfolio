import React from 'react'

let Overlay = (props) => {
    if (props.pause) {
        return (
            <g>
                <rect width="200%" height="200%" x="-100%" y="-100%"fill="rgba(0,0,0,0.1)" />
                <text textAnchor="middle" dominantBaseline="middle" fontFamily="Verdana" fontSize="32" fill="white" fontWeight="500">Paused</text>
            </g>)
    }
    else return null
}
export default Overlay