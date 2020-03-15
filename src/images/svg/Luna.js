import React from 'react'

let Luna = props => (
    <path d={` 
        M ${props.x} ${props.y - 250 * props.ratio}
        A ${250 * props.ratio} ${250 * props.ratio} 0 1 1 ${props.x + -250 * props.ratio} ${props.y}
        C ${props.x + -50 * props.ratio} ${props.y + 350 * props.ratio} ${props.x + 350 * props.ratio} ${props.y - 50 * props.ratio} ${props.x} ${props.y - 250 * props.ratio}
        Z`}
        fill="yellow"
        transform={`rotate(${props.rotation} 0 0)`} />
)
export default Luna
