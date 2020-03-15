import React from 'react'

let Knight = props => <path d={
    `M ${props.x} ${props.y - 150 * props.ratio}
    V ${props.y - 250 * props.ratio}
    a ${35 * props.ratio} ${45 * props.ratio} 0 0 1 ${35 * props.ratio} ${45 * props.ratio}
    C ${props.x + 150 * props.ratio} ${props.y - 200 * props.ratio} ${props.x + 150 * props.ratio} ${props.y - 100 * props.ratio} ${props.x + 125 * props.ratio} ${props.y + 50 * props.ratio}
    S ${props.x + 50 * props.ratio} ${props.y + 50 * props.ratio} ${props.x + 120 * props.ratio} ${props.y + 200 * props.ratio}
    Q ${props.x + 125 * props.ratio} ${props.y + 250 * props.ratio} ${props.x + 100 * props.ratio} ${props.y + 250 * props.ratio}
    H ${props.x - 130 * props.ratio}
    a ${20 * props.ratio} ${20 * props.ratio} 0 0 1 ${20 * props.ratio} ${20 * props.ratio}
    Q ${props.x - 150 * props.ratio} ${props.y + 205 * props.ratio} ${props.x - 110 * props.ratio} ${props.y + 180 * props.ratio}
    Q ${props.x - 80 * props.ratio} ${props.y} ${props.x} ${props.y - 25 * props.ratio}
    H ${props.x - 70 * props.ratio} 
    L ${props.x - 140 * props.ratio} ${props.y + 10 * props.ratio}
    H ${props.x - 180 * props.ratio}
    L ${props.x - 200 * props.ratio} ${props.y - 30 * props.ratio} 
    V ${props.y - 65 * props.ratio}
    L ${props.x - 75 * props.ratio} ${props.y - 150 * props.ratio}
    V ${props.y - 170 * props.ratio}
    L ${props.x} ${props.y - 200 * props.ratio}
    Z`}
    transform={`rotate(${props.rotation} 0 0)`}
    fill="url(#chess)" />

export default Knight
