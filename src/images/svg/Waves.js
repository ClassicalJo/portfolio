import React from "react"

let cos = angle => Math.cos(angle * Math.PI / 180)
let sin = angle => Math.sin(angle * Math.PI / 180)

let generateWaves = () => {
    let seaArray = new Array(360 / 20).fill("")
    seaArray[0] = `M ${190 * cos(0)} ${190 * sin(0)}`
    for (let i = 1; i < seaArray.length; i++) {
        seaArray[i] = `C 
        ${195 * cos((i - 1) * 20 + 5)}      ${195 * sin((i - 1) * 20 + 5)} 
        ${180 * cos((i - 1) * 20)}          ${180 * sin((i - 1) * 20)} 
        ${190 * cos(i * 20)}                ${190 * sin(i * 20)}`
    }
    seaArray.push(`Q ${180 * cos(360)} ${180 * sin(360)} ${190 * cos(360)} ${190 * sin(360)} Z`)
    return seaArray.join(" ")
}

let wavesPath = generateWaves()

let Waves = props => <path d={wavesPath} fill='cyan' fillOpacity="0.5" transform={`rotate(${props.angle} 0 0)`} />

export default Waves
