import React from 'react'

let radiansToDegrees = (number) => {
    return number * 180 / Math.PI
}

let Triangle = (props) => {
    var rotate = `rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`
    var path = `M${props.x - props.width/2} ${props.y + props.height / 2} L ${props.x} ${props.y - props.height / 2} L ${props.x + props.width / 2} ${props.y + props.height/2} Z`
    return (
        <path
            transform={rotate}
            d={path}
            fill={props.color}
            stroke={props.color}
            strokeWidth="2"
        />
    )
}
export default Triangle