import React from "react"

let generateGrass = () => {
    let r = 195
    let spike = 187
    let step = 0.2 * Math.PI / 180
    let grassArray = new Array(2 * Math.PI / step).fill("")
    grassArray[0] = `M ${spike * Math.cos(0)} ${spike * Math.sin(0)}`
    for (let i = 1; i < grassArray.length * 3/4 + 1 ; i++) {
        i % 2 === 1 ? grassArray[i] = `Q ${spike * Math.cos(step * i)} ${spike * Math.sin(step * i)}` : grassArray[i] = `${r * Math.cos(step * i)} ${r * Math.sin(step * i)}`
    }
    grassArray.push(`Z`)
    return grassArray.join(" ")
}
let grass = generateGrass()

let Grass = props => {
    return <path d={grass} fill="seagreen" transform="rotate(-150 0 0)" />
}

export default Grass

