import React from "react"

let Pine = props => {
    return (
        <React.Fragment>
            <g transform={`rotate(${props.rotation} 0 0)`}>
            <rect x={props.x - 50 * props.ratio} y={props.y + 150 * props.ratio} width={100 * props.ratio} height={100 * props.ratio} fill="brown" />
            <path d={`M ${props.x} ${props.y - 250 * props.ratio} L ${props.x + 250 * props.ratio} ${props.y + 200 * props.ratio} H${props.x - 250 * props.ratio}Z`} fill="rgb(0, 190,140)" />
            </g>
        </React.Fragment>
    )
}

export default Pine
