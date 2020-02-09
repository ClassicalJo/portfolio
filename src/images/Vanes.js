import React from 'react'

let radiansToDegrees = (number) => {
    return number * 180 / Math.PI
}

let Vanes = (props) => {
    var rotate = `rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`

    return <g transform={rotate}>
        <path fill="white" d="M -150 -50 L -0 -0 L -50 -150 H 50 L 0 -0 L 150 -50 V 50 L 0 0 L 50 150 H -50 L -0 0 L -150 50 Z" />
        <circle cx={props.x} cy={props.y} r="10" fill="#306BAC"/>
    </g>
}
export default Vanes