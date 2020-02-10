import React from 'react'

let radiansToDegrees = (number) => {
    return number * 180 / Math.PI
}

let Box = (props) => {
    var rotate = `rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`
    return (
        <rect
            x={props.x - props.width / 2}
            y={props.y - props.height / 2}
            transform={rotate}
            width={props.width}
            height={props.height}
            fill={props.color}>
        </rect>
        )
}

export default Box
