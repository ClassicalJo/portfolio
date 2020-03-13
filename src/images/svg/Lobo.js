import React from 'react'

let radiansToDegrees = (number) => {
    return number * 180 / Math.PI
}

let Lobo = (props) => {
    let path = `M${props.x - props.width / 2} ${props.y + props.height / 2} V${props.y - props.height / 2} L${props.x - props.width * 3 / 10} ${props.y - props.height * 1 / 10} H${props.x + props.width * 3 / 10} L${props.x + props.width / 2} ${props.y - props.height / 2} V${props.y + props.height / 2}Z`
    let rotate = `rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`
    return (
        <g transform={rotate}>
            <path d={path} fill="white" />
            <circle cx={props.x + props.width / 4} cy={props.y + props.height / 10} r={props.height / 20} fill="#55cdfc" />
            <circle cx={props.x - props.width / 4} cy={props.y + props.height / 10} r={props.height / 20} fill="#55cdfc" />
            <rect x={props.x - props.width / 2} y={props.y - props.height / 2 + props.height * 85 / 100} width={props.width} height={props.height * 15 / 100} fill="#306BAC" />
        </g>
    )
}

export default Lobo


