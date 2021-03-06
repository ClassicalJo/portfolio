import React from 'react'
import Lobo from "./Lobo"

let Boat = props => (
    <g transform={`rotate(${props.rotation} 0 0)`}>
        <g>
            <Lobo
                x={props.x + -50 * props.ratio} y={props.y + -60 * props.ratio}
                width={150 * props.ratio}
                height={150 * props.ratio}
                angle="0" />
            <path d={`
                M ${props.x - 250 * props.ratio} ${props.y}
                C ${props.x - 250 * props.ratio} ${props.y + 250 * props.ratio} ${props.x + 250 * props.ratio} ${props.y + 250 * props.ratio} ${props.x + 250 * props.ratio} ${props.y}
                H ${props.x + 100 * props.ratio}
                V ${props.y - 250 * props.ratio}
                H ${props.x + 90 * props.ratio}
                Q ${props.x + 100 * props.ratio} ${props.y - 200 * props.ratio} ${props.x - 200 * props.ratio} ${props.y - 200 * props.ratio}
                Q ${props.x + 100 * props.ratio} ${props.y - 200 * props.ratio} ${props.x + 90 * props.ratio} ${props.y - 150 * props.ratio}
                V ${props.y}
                Z`}
                fill="brown" />
            <path d={`M ${props.x + 90 * props.ratio} ${props.y - 150 * props.ratio} H ${props.x + 100 * props.ratio} V ${props.y} H ${props.x + 90 * props.ratio} Z`} fill='white' />
            <animateTransform
                attributeName="transform"
                type="rotate"
                values={`-15 ${props.x} ${props.y}; 15 ${props.x} ${props.y}; -15 ${props.x} ${props.y}`}
                keySplines=".32 .1 .48 1;.32 .1 .48 1"
                keyTimes="0;0.5;1"
                calcMode='spline'
                begin="0s"
                dur="3.5s"
                repeatCount='indefinite'
            />
        </g>
    </g>
)

export default Boat
