import React from 'react'
import { shouldRender } from "./HomeSVG"

let radiansToDegrees = (number) => {
    return number * 180 / Math.PI
}

let Vanes = (props) => {
    let path = ` 
                M ${props.x - 150 / props.ratio} ${props.y - 50 / props.ratio} 
                L ${props.x} ${props.y} 
                L ${props.x - 50 / props.ratio} ${props.y - 150 / props.ratio} 
                H ${props.x + 50 / props.ratio}  
                L ${props.x} ${props.y} 
                L ${props.x + 150 / props.ratio} ${props.y - 50 / props.ratio} 
                V ${props.y + 50 / props.ratio} 
                L ${props.x} ${props.y} 
                L ${props.x + 50 / props.ratio} ${props.y + 150 / props.ratio} 
                H ${props.x - 50 / props.ratio} 
                L ${props.x} ${props.y} 
                L ${props.x - 150 / props.ratio} ${props.y + 50 / props.ratio} 
                Z
                `
    var rotate = `rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`
    if (!shouldRender(props.viewBox, props.x, 150 / props.ratio)) return <React.Fragment />
    return (
        <React.Fragment>
            <path d={`M ${props.x} ${props.y} L ${props.x - 35 / props.ratio} 400 H ${props.x + 35 / props.ratio}`} fill="#306BAC" />
            <g transform={rotate} >
                <path fill="white" d={path} />
                <circle cx={props.x} cy={props.y} r={10 / props.ratio} fill="#306BAC" pointerEvents="none" />
                <circle fill="transparent" cx={props.x} cy={props.y} r={150 / props.ratio} onClick={props.onClick} cursor="pointer" />
            </g>
        </React.Fragment>)
}
export default Vanes
