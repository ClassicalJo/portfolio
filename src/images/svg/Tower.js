import React from 'react'
import Lobo from "./Lobo"

let Tower = props => {
    return (<g transform={`rotate(${props.rotation} 0 0)`}>
        <Lobo x={props.x - 30 * props.ratio} y={props.y - 249 * props.ratio} width={100 * props.ratio} height={100 * props.ratio} angle="0" />
        <path d={
            `M ${props.x - 175 * props.ratio} ${props.y + 250 * props.ratio} 
            V ${props.y}
            Q ${props.x - 175 * props.ratio} ${props.y - 75 * props.ratio} ${props.x - 225 * props.ratio} ${props.y - 150 * props.ratio}
            L ${props.x - 225 * props.ratio} ${props.y - 250 * props.ratio}
            H ${props.x - 175 * props.ratio}
            V ${props.y - 200 * props.ratio}
            H ${props.x - 125 * props.ratio}
            V ${props.y - 250 * props.ratio}
            H ${props.x - 75 * props.ratio}
            V ${props.y - 200 * props.ratio}
            H ${props.x - 25 * props.ratio}
            V ${props.y - 250 * props.ratio}
            H ${props.x + 25 * props.ratio}
            V ${props.y - 200 * props.ratio}
            H ${props.x + 75 * props.ratio}
            V ${props.y - 250 * props.ratio}
            H ${props.x + 125 * props.ratio}
            V ${props.y - 200 * props.ratio}
            H ${props.x + 175 * props.ratio}
            V ${props.y - 250 * props.ratio}
            H ${props.x + 225 * props.ratio}
            V ${props.y - 150 * props.ratio}
            Q ${props.x + 175 * props.ratio} ${props.y - 75 * props.ratio} ${props.x + 175 * props.ratio} ${props.y}
            V ${props.y + 250 * props.ratio}
            Z`}
            fill="#306BAC" />
    </g>
    )
}

export default Tower
