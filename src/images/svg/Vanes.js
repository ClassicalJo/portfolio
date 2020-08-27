import React from 'react'

let Vanes = props => {
    let { x, y, ratio, rotation } = { ...props }
    let path = ` 
                M ${x - 150 / ratio} ${y - 50 / ratio} 
                L ${x} ${y} 
                L ${x - 50 / ratio} ${y - 150 / ratio} 
                H ${x + 50 / ratio}  
                L ${x} ${y} 
                L ${x + 150 / ratio} ${y - 50 / ratio} 
                V ${y + 50 / ratio} 
                L ${x} ${y} 
                L ${x + 50 / ratio} ${y + 150 / ratio} 
                H ${x - 50 / ratio} 
                L ${x} ${y} 
                L ${x - 150 / ratio} ${y + 50 / ratio} 
                Z
                `
    return (
        <g transform={`rotate(${rotation} 0 0)`}>
            <path d={`M ${x} ${y} L ${x - 40 / ratio} ${y + 400 / ratio} H ${x + 40 / ratio}`} fill="#306BAC" />
            <g>
                <path fill="white" d={path} />
                <circle cx={x} cy={y} r={10 / ratio} fill="#306BAC" />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y}`}
                    to={`360 ${x} ${y}`}
                    dur={`${10 + 10 / ratio}s`}
                    begin="0s"
                    repeatCount="indefinite"
                />
            </g>
        </g>
    )
}
export default Vanes
