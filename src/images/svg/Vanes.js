import React from 'react'

let radiansToDegrees = (number) => number * 180 / Math.PI

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
    return (
        <React.Fragment>
            <g transform={props.degrees}>
                <path d={`M ${props.x} ${props.y} L ${props.x - 40 / props.ratio} ${props.y + 400 / props.ratio} H ${props.x + 40 / props.ratio}`} fill="#306BAC" />
                <g transform={`rotate(${radiansToDegrees(props.angle)} ${props.x} ${props.y})`} >
                    <path fill="white" d={path} />
                    <circle cx={props.x} cy={props.y} r={10 / props.ratio} fill="#306BAC" />
                    <circle fill="transparent" cx={props.x} cy={props.y} r={150 / props.ratio} />
                </g>
            </g>
        </React.Fragment>
    )
}
export default Vanes
