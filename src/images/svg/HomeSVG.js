import React from 'react'

export let shouldRender = (viewBox, positionX, width) => {
    return (viewBox > positionX - width - 250 - window.innerWidth && viewBox < positionX + width + 250 + window.innerWidth)
}

export let Mountains = () => {
    return <path d="M -2000 400 L -1600 -300 L -1200 300 L -800 -400 L -400 400Z" fill="grey" />
}

export let Mounts = () => {
    return <path d="M -2000 400 L -600 0 Q -200 -100, 400 0 T 1400 -100 T 2200 400 Z" fill="lightseagreen" />
}

export let Lobo = () => {
    return (
        <g>
            <path d="M -400 400 V 250 L -375 300 H -225 L -200 250 V 400 Z " fill="white" strokeWidth="5" />
            <circle cx="-250" cy="318" r="8" fill="#55cdfc" />
            <circle cx="-350" cy="318" r="8" fill="#55cdfc" />
            <rect width="200" height="25" x="-400" y="375" fill="#141B41" />
        </g>
    )
}

export let Luna = props => {
    if (!shouldRender(props.viewBox, props.cx, 400)) return <React.Fragment />
    return (
        <React.Fragment>
            <mask id={props.id}>
                <rect x={props.cx - 500} y={props.cy - 500} height="1000" width="1000" fill="white"></rect>
                <circle cx={props.cx - 100} cy={props.cy - 200} r="300" fill="black" />
            </mask>
            <circle cx={props.cx} cy={props.cy} r="350" fill="white" mask={`url(#${props.id})`} />
        </React.Fragment>
    )
}

let chain = new Array(10).fill(undefined)
export let Chain = props => {
    if (!shouldRender(props.viewBox, props.x - 50, 100)) return <React.Fragment />
    return (
        <React.Fragment>
            {chain.map((key, index) => <rect key={index + 1} x={props.x} y={props.y - 150 * index} width="100" height="100" strokeWidth="20" stroke="white" fill="transparent" transform={`rotate(45 ${props.x + 50} ${props.y - 150 * index + 50})`} />)}
            {chain.map((key, index) => <rect key={-index + 1} x={props.x + 75} y={props.y - 150 * index} width="100" height="100" strokeWidth="20" stroke="#306BAC" fill="transparent" transform={`rotate(45 ${props.x + 125} ${props.y - 150 * index + 50})`} />)}
            {chain.map((key, index) => <line key={index + 1} x1={props.x + 49} y1={props.y - 150 * index - 27} x2={props.x + 120} y2={props.y - 150 * index - 25 - 75} strokeWidth="20" stroke="white" />)}
        </React.Fragment>
    )
}

function* generateKeys() {
    var number = 0
    while (true) yield number++
}

let newKey = generateKeys()
let borderArray = new Array(4).fill([newKey.next().value, newKey.next().value, newKey.next().value])

let hour = 2 * Math.PI / 12
let minute = 2 * Math.PI / 60
let second = 2 * Math.PI / 60

export let Clock = props => {
    let date = new Date()
    let hours = date.getHours() % 12
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()

    if (!shouldRender(props.viewBox, props.cx, 300)) return <React.Fragment />
    return (
        <React.Fragment>
            <circle cx={props.cx} cy={props.cy} r="250" fill="#141B41" />
            <path d={`M ${props.cx} ${props.cy} Q ${props.cx} ${200}, ${props.cx - 200} ${400} H ${props.cx + 200} Q ${props.cx} ${200}, ${props.cx} ${props.cy} Z`} fill="#141B41" />
            {borderArray.map((key, index) => {
                return (
                    <React.Fragment key={newKey.next().value}>
                        <circle key={key[0]} cx={props.cx} cy={props.cy} r={200 - 20 * index} fill="whitesmoke" stroke="#141B41" strokeWidth="10" />
                        <circle key={key[1]} cx={props.cx} cy={props.cy} r={200 - 20 * index} fill="transparent" stroke="whitesmoke" strokeWidth="10" strokeDasharray={`${(2 * Math.PI * (200 - 20 * index)) / 50} ${(2 * Math.PI * (200 - 20 * index)) / 50}`} transform={`rotate (${milliseconds * 0.0275 * (index % 2 !== 0 ? 1 : -1)} ${props.cx} ${props.cy})`} />
                        <circle key={key[2]} cx={props.cx} cy={props.cy} r={190 - 20 * index} fill="transparent" stroke="#306BAC" strokeWidth="10" strokeDasharray={`${(2 * Math.PI * (190 - 20 * index)) / 50} ${(2 * Math.PI * (190 - 20 * index)) / 50}`} transform={`rotate (${milliseconds * 0.0275 * (index % 2 !== 0 ? 1 : -1)} ${props.cx} ${props.cy})`} />
                    </React.Fragment>
                )
            })}
            <g transform={`rotate(-90 ${props.cx} ${props.cy})`}>

                <line x1={props.cx} y1={props.cy} x2={props.cx + 100 * Math.cos(minutes * minute)} y2={props.cy + 100 * Math.sin(minutes * minute)} strokeWidth="10" stroke="#306BAC" strokeLinecap="round" />}
                <line x1={props.cx} y1={props.cy} x2={props.cx + 50 * Math.cos(hours * hour)} y2={props.cy + 50 * Math.sin(hours * hour)} strokeWidth="10" stroke="#141B41" strokeLinecap="round" />}
                <line x1={props.cx} y1={props.cy} x2={props.cx + 110 * Math.cos(seconds * second)} y2={props.cy + 110 * Math.sin(seconds * second)} strokeWidth="2" stroke="black" strokeLinecap="round" />}
                <circle cx={props.cx} cy={props.cy} r="10" fill="#141B41" />
            </g>
        </React.Fragment >
    )
}

export let Tower = props => {
    let date = new Date()
    let milliseconds = date.getMilliseconds()
    if (!shouldRender(props.viewBox, props.x - 200, 400)) return <React.Fragment />
    return (
        <React.Fragment>
            <defs>
                <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity="1" />
                </linearGradient>
                <pattern id="pattern" width="40" height="40">
                    <rect width="40" height="40" fill="url(#gradient)" />
                </pattern>
            </defs>

            <mask id={props.id}>
                <rect x={props.x - 100} y="-500" width="1000" height="1000" fill="white" />
                <rect x={props.x - 100} y="100" width="550" height="100" fill="black" />
                <rect x={props.x + 100 - 12.5} y="-500" width="25" height="650" fill="black" />
                <rect x={props.x + 250 - 12.5} y="-500" width="25" height="650" fill="black" />
            </mask>

            <circle cx={props.x + 300 - Math.abs(milliseconds - 500) * 0.5} cy={150} r="20" fill="url(#pattern)" transform={`rotate (180 ${props.x + 300 - Math.abs(milliseconds - 500) * 0.5} ${150})`} />

            <path d={`M ${props.x} 400 V 0 Q ${props.x} -100, ${props.x - 100} -200 V -250 H ${props.x - 50} V -210 H ${props.x} V -250 H ${props.x + 50} V -210 H ${props.x + 100} V -250 H ${props.x + 150} V -210 H ${props.x + 200} V -250 H ${props.x + 250} V -210 H ${props.x + 300} V -250 H ${props.x + 350} V -210 H ${props.x + 400} V -250 H ${props.x + 450} V -200 Q ${props.x + 350} -100, ${props.x + 350} 0 V 400 Z`} fill="#141B41" mask={`url(#${props.id})`} />

        </React.Fragment>)
}
