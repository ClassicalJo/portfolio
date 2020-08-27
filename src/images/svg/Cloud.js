import React from 'react'
let Cloud = props => {
    return (
        <g transform={`rotate(${props.rotation} 0 0)`}>
            <path
                d={`
                    M ${props.position.x - 50 * props.ratio} ${props.position.y + 50 * props.ratio} 
                    H ${props.position.x + 50 * props.ratio} 
                    Q ${props.position.x + 30 * props.ratio} ${props.position.y},
                    ${props.position.x} ${props.position.y + 25 * props.ratio},
                    Q ${props.position.x - 15 * props.ratio} ${props.position.y},
                    ${props.position.x - 30 * props.ratio} ${props.position.y + 25 * props.ratio}
                    Z`}
                fill="white">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="60s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    )
}

export default Cloud
