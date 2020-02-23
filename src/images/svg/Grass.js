import React from 'react'


let pathFunctions = {
    rest0: (x, y, i, ratio) => {
        return `Q ${5 * ratio * i + x} ${y + 25 * ratio},`
    },
    rest1: (x, y, i, ratio) => {
        return `${5 * ratio * i + x} ${y - 50 * ratio}`
    }
}


let Grass = (props) => {
    let path = [`M ${props.x} ${props.y - 50}`]
    for (let i = 1; i < props.width / props.ratio; i++) {
        let value = (i % 2 === 0) ? pathFunctions.rest0(props.x, props.y, i, props.ratio) : pathFunctions.rest1(props.x, props.y, i, props.ratio)
        path.push(value)
    }
    path.push(`V${props.height + props.y} H ${props.x}  Z`)
    let string = path.join(" ")

    return (
        <path d={string} fill={props.color}></path>
    )
}

export default Grass
