import React from 'react'
import Lobo from "../../images/svg/Lobo"
import Vanes from "../../images/svg/Vanes"
import Cloud from "../../images/svg/Cloud"

let cos = angle => Math.cos(angle * Math.PI / 180)
let sin = angle => Math.sin(angle * Math.PI / 180)
let transformX00 = angle => `rotate(${angle} 0 0)`

let grass = () => {
    let r = 195
    let spike = 187
    let step = 0.2 * Math.PI / 180
    let grassArray = new Array(2 * Math.PI / step).fill("")
    grassArray[0] = `M ${r * Math.cos(0)} ${r * Math.sin(0)}`
    for (let i = 1; i < grassArray.length; i++) {
        i % 2 === 1 ? grassArray[i] = `Q ${spike * Math.cos(step * i)} ${spike * Math.sin(step * i)}` : grassArray[i] = `${r * Math.cos(step * i)} ${r * Math.sin(step * i)}`
    }
    grassArray.push(`${r * Math.cos(2 * Math.PI)} ${r * Math.sin(2 * Math.PI)} Z`)
    return grassArray.join(" ")
}

let sea = () => {
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

let clouds = { 30: 275, 90: 285, 150: 293, 210: 280, 270: 280, 330: 270 }

const Definitions = props => {
    return (
        <defs>
            <linearGradient id="chess" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#306BAC" stopOpacity="0" />
                <stop offset="35%" stopColor="#306BAC" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="twilight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="50%" stopColor="transparent" stopOpacity="0" />
                <stop offset="85%" stopColor="#141B41" stopOpacity="0.9" />
            </linearGradient>

            <mask id="lunaMask">
                <rect x="-250" y="-250" height="500" width="500" fill="white" />
                <circle cx="-50" cy="-50" r="200" fill="black" />
            </mask>
            <mask id="seaMask">
                <rect x="-250" y="-250" height="500" width="500" fill="white" />
                <path d={`M -250 0 Q -50 -50 ${250 * Math.cos(270 * Math.PI / 180)} ${250 * Math.sin(270 * Math.PI / 180)} A 250 250 0 1,0 ${250 * Math.cos(Math.PI)} ${250 * Math.sin(Math.PI)} Z`} fill="black" transform="rotate(-60 0 0)" />
            </mask>
            <filter id="shadow">
                <feDropShadow dx="-0.15" dy="0.2" stdDeviation="0.25"></feDropShadow>
            </filter>
            <symbol id="grass" viewBox="-250 -250 500 500">
                <path d={grass()} fill="seagreen" mask="url(#seaMask)" />
            </symbol>

            <symbol id="sea" viewBox="-250 -250 500 500">
                <path d={sea()} fill='#141BAC' fillOpacity="0.5" transform={transformX00(props.sea.angle)} />
            </symbol>

            <symbol id="waves" viewBox="-250 -250 500 500">
                <path d={sea()} fill='cyan' fillOpacity="0.5" transform={transformX00(props.waves.angle)} />
            </symbol>

            <symbol id="travel-arrow" viewBox="-250 -250 500 500">
                <path d="M 0 -250 L 250 0 L 0 250 Z" fill="white" />
            </symbol>

            <symbol id="pine" viewBox="-250 -250 500 500">
                <rect x="-50" y="150" width="100" height="100" fill="brown" />
                <path d="M 0 -250 L 250 200 H -250 Z" fill="rgb(0, 190,140)" />
            </symbol>
            <symbol id="luna" viewBox="-250 -250 500 500">
                <circle r="250" fill="white" mask="url(#lunaMask)" />
            </symbol>

            <symbol id="sun" viewBox="-250 -250 500 500">
                <circle r="250" fill="white" />
            </symbol>

            <symbol id="clock" viewBox="-250 -250 500 500">
                <path d="M -200 100 Q 0 -100 -100 250 H 100 Q 0 -100 200 100 L 0 -250 Z" fill="#141B41" />
                <circle cx="0" cy="-50" r="150" stroke="#141B41" strokeWidth="20" fill="white" />
                <circle cx={0} cy={-50} r={140} fill="whitesmoke" stroke="#141B41" strokeWidth="10" />
                <circle cx={0} cy={-50} r={140} fill="transparent" stroke="whitesmoke" strokeWidth="10" strokeDasharray={`${(140 * Math.PI / 50)} ${(140 * Math.PI / 50)}`} transform={`rotate (${props.date.getMilliseconds() * 0.0275} ${0} ${-50})`} />
                <circle cx={0} cy={-50} r={130} fill="transparent" stroke="#306BAC" strokeWidth="10" strokeDasharray={`${(130 * Math.PI / 50)} ${(130 * Math.PI / 50)}`} transform={`rotate (-${props.date.getMilliseconds() * 0.0275} ${0} ${-50})`} />
                <circle cx={0} cy={-50} r={120} fill="whitesmoke" stroke="#141B41" strokeWidth="10" />
                <circle cx={0} cy={-50} r={120} fill="transparent" stroke="whitesmoke" strokeWidth="10" strokeDasharray={`${(120 * Math.PI / 50)} ${(120 * Math.PI / 50)}`} transform={`rotate (${props.date.getMilliseconds() * 0.0275} ${0} ${-50})`} />
                <circle cx={0} cy={-50} r={110} fill="transparent" stroke="#306BAC" strokeWidth="10" strokeDasharray={`${(110 * Math.PI / 50)} ${(110 * Math.PI / 50)}`} transform={`rotate (-${props.date.getMilliseconds() * 0.0275} ${0} ${-50})`} />
                <g transform="rotate(-90 0 -50)">
                    <line x1={0} y1={-50} x2={90 * Math.cos(props.date.getMinutes() * (2 * Math.PI / 60))} y2={-50 + 90 * Math.sin(props.date.getMinutes() * (2 * Math.PI / 60))} strokeWidth="10" stroke="#306BAC" strokeLinecap="round" />}
                    <line x1={0} y1={-50} x2={50 * Math.cos(props.date.getHours() % 12 * (2 * Math.PI / 12))} y2={-50 + 50 * Math.sin(props.date.getHours() % 12 * (2 * Math.PI / 12))} strokeWidth="10" stroke="#141B41" strokeLinecap="round" />}
                    <line x1={0} y1={-50} x2={100 * Math.cos(props.date.getSeconds() * (2 * Math.PI / 60))} y2={-50 + 100 * Math.sin(props.date.getSeconds() * (2 * Math.PI / 60))} strokeWidth="2" stroke="black" strokeLinecap="round" />
                    <circle cx="0" cy="-50" fill="#141B41" r="10" />
                </g>

            </symbol>

            <symbol id="tower" viewBox="-300 -300 600 600">
                <Lobo x={-30} y={-249} width="100" height="100" angle="0" />
                <path d="M -175 250 V 0 Q -175 -75, -225 -150 L -225 -250 H -175 V -200 H -125 V -250 H -75 V -200 H -25 V -250 H 25 V -200 H 75 V -250 H 125 V -200 H 175 V -250 H 225 V -150 Q 175 -75, 175 0 V 250 Z" fill="#306BAC" />
            </symbol>

            <symbol id="boat" viewBox="-250 -250 500 500">
                <g transform={transformX00(2.5 - Math.abs(props.date.getMilliseconds() / 100 - 5))}>
                    <Lobo x={-50} y={-60} width="150" height="150" angle="0" />
                    <path d="M -250 0 C -250 250 250 250 250 0 H 100 V -250 H 90 Q 100 -200 -200 -200 Q 100 -200 90 -150 V 0Z" fill="brown" />
                    <path d="M 90 -150 H 100 V 0 H 90 Z" fill='white' />
                </g>
            </symbol>

            <symbol id="spades" viewBox="-500 -500 1000 1000">
                <g transform="rotate(0 0 0)">
                    <path d="M 20 100 Q 20 200 100 250 H -100 Q -20 200 -20 100 C -100 200 -250 100 0 -200 C 250 100 100 200 20 100 Z" fill="#141B41" />
                </g>
            </symbol>

            <symbol id="diamonds" viewBox="-500 -500 1000 1000" >
                <g transform="rotate(-2 0 0)">
                    <path d="M 0 -250 Q -50 -50 -150 0 Q -50 50 0 250 Q 50 50 150 0 Q 50 -50 0 -250 Z" fill="white" />
                </g>
            </symbol>

            <symbol id="hearts" viewBox="-500 -500 1000 1000">
                <g transform="rotate(0 0 0)">
                    <path d="M 0 -100 C 0 -250 -175 -200 -175 -100 C -175 0 -25 50 0 200 M 0 -100 C 0 -250 175 -200 175 -100 C 175 0 25 50 0 200" fill="white" transform="translate(0 20)" />
                </g>
            </symbol>

            <symbol id="clubs" viewBox="-600 -600 1200 1200">
                <g transform="rotate(2 0 0)">
                    <path d="M 20 100 Q 20 200 100 250 H -100 Q -20 200 -20 100 C -250 300 -250 -200 -20 20 C -250 -300 250 -300 20 20 C 250 -200 250 300 20 100 Z" fill="#141B41" />
                </g>
            </symbol>

            <symbol id="knight" viewBox="-250 -250 500 500">
                <path d="M 0 -150 V -250 a 35 45 0 0 1 35 45 C 150 -200 150 -100 125 50 S 50 50 120 200 Q 125 250 100 250 H -130 a 20 20 0 0 1 20 20 Q -150 205 -110 180 Q -80 0 0 -25 H -70 L -140 10 H -180 L -200 -30 V -65 L -75 -150 V -170 L 0 -200  Z" fill="url(#chess)" />
            </symbol>

            <symbol id="bishop" viewBox="-250 -250 500 500">
                <path d="M 150 250 H -150 Q -150 205 -110 180 Q 0 50 -50 -50 C -100 -0 -100 -75 -20 -50 A 30 50 0 0 1 0 -200 C -50 -250 50 -250 0 -200 A 30 50 0 0 1 35 -155 L 0 -125 L 0 -100 L 40 -135 A 30 50 0 0 1 20 -50 C 100 -75 100 0 50 -50 Q 0 0 110 180 Q 150 205 150 250 H 180 Z" fill="url(#chess)" />
            </symbol>

            <symbol id="dice1" viewBox="-250 -250 500 500">
                <rect width="350" height="350" x="-175" y="-175" rx="50" ry="50" fill="white" stroke="whitesmoke" strokeWidth="20" />
                <circle r='40' cx="-100" cy="-100" fill="darkslategrey" opacity="0.5" />
                <circle r='40' fill="darkslategrey" opacity="0.5" />
                <circle r='40' cx="100" cy="100" fill="darkslategrey" opacity="0.5" />
            </symbol>

            <symbol id="dice5" viewBox="-250 -250 500 500">
                <g transform="rotate(-25 0 0)">
                    <rect width="350" height="350" x="-175" y="-175" rx="50" ry="50" fill="white" stroke="whitesmoke" strokeWidth="20" />
                    <circle r='40' fill="darkslategrey" opacity="0.5" />
                    <circle r='40' cx="-100" cy="-100" fill="darkslategrey" opacity="0.5" />
                    <circle r='40' cx="100" cy="-100" fill="darkslategrey" opacity="0.5" />
                    <circle r='40' cx="100" cy="100" fill="darkslategrey" opacity="0.5" />
                    <circle r='40' cx="-100" cy="100" fill="darkslategrey" opacity="0.5" />
                </g>
            </symbol>

            <symbol id="loboland" viewBox="-500 -500 1000 1000">
                <use width="50" height="50" x={350 * cos(270)} y={350 * sin(270)} xlinkHref="#sun" />
                {Object.keys(clouds).map((key, index) => <g key={index} transform={`rotate(${Number(key) + props.vane.angle / 2} 0 0)`}><Cloud position={{ x: clouds[key] * cos(270), y: clouds[key] * sin(270) }} ratio="0.25" /></g>)}
                <use width="80" height="80" x={230 * cos(270) - 40} y={230 * sin(270) - 40} xlinkHref="#pine" transform="rotate(-20 0 0)" />
                <use width="70" height="70" x={225 * cos(270) - 35} y={225 * sin(270) - 35} xlinkHref="#pine" transform="rotate(-45 0 0)" />
                <Lobo x={202 * cos(270)} y={202 * sin(270)} width="25" height="25" angle="0" />
                <Lobo x={202 * cos(80)} y={202 * sin(80)} width="25" height="25" angle={170 * Math.PI / 180} />


                <Vanes x={235 * cos(270)} y={235 * sin(270)} ratio={8} degrees="rotate(25 0 0)" angle={props.vane.angle} />
                <Vanes x={210 * cos(270)} y={210 * sin(270)} ratio={15} degrees="rotate(35 0 0)" angle={props.vane.angle} />
                <Vanes x={225 * cos(270)} y={225 * sin(270)} ratio={10} degrees="rotate(45 0 0)" angle={props.vane.angle} />

                <use width="7.5" height="7.5" x={194 * cos(270) - 3.75} y={194 * sin(270) - 3.75} xlinkHref="#dice5" transform="rotate(60.25 0 0)" />
                <use width="7.5" height="7.5" x={194 * cos(270) - 3.75} y={194 * sin(270) - 3.75} xlinkHref="#dice1" transform="rotate(62 0 0)" />

                <use width="25" height="25" x={202 * cos(270) - 12.5} y={202 * sin(270) - 12.5} xlinkHref="#knight" transform="rotate(75 0 0)" />
                <use width="25" height="25" x={202 * cos(270) - 12.5} y={202 * sin(270) - 12.5} xlinkHref="#bishop" transform="rotate(66 0 0)" />
                <use width="110" height="110" x={(235 * cos(270) - 55)} y={(235 * sin(270) - 55)} xlinkHref="#tower" transform="rotate(90 0 0)" />

                <use width="50" height="50" x={230 * cos(270) - 25} y={230 * sin(270) - 25} xlinkHref="#diamonds" transform="rotate(118.5 0 0)" />
                <use width="50" height="50" x={215 * cos(270) - 25} y={215 * sin(270) - 25} xlinkHref="#spades" transform="rotate(125 0 0)" />
                <use width="50" height="50" x={230 * cos(270) - 25} y={230 * sin(270) - 25} xlinkHref="#hearts" transform="rotate(131.5 0 0)" />
                <use width="50" height="50" x={215 * cos(270) - 25} y={215 * sin(270) - 25} xlinkHref="#clubs" transform="rotate(138 0 0)" />
                <use width="50" height="50" x={230 * cos(270) - 25} y={230 * sin(270) - 25} xlinkHref="#diamonds" transform="rotate(145.5 0 0)" />

                <use width="50" height="50" x={(200 * cos(270) - 25)} y={(200 * sin(270) - 25)} xlinkHref="#boat" transform="rotate(-90 0 0)" />
                <use width="50" height="50" x={(215 * cos(270) - 25)} y={(215 * sin(270) - 25)} xlinkHref="#clock" transform="rotate(180 0 0)" />

                <use width="500" height="500" x="-250" y="-250" xlinkHref="#sea" />
                <use width="500" height="500" x="-250" y="-250" xlinkHref="#waves" />
                <use width="500" height="500" x="-250" y="-250" xlinkHref="#grass" />
                <rect x="-500" y="-500" width="1000" height="1000" fill="url(#twilight)" transform="rotate(0 0 0)" />
                <use width="50" height="50" x={350 * cos(270)} y={350 * sin(270)} xlinkHref="#luna" transform="rotate(180 0 0)" />

            </symbol>
        </defs>
    )
}
export default Definitions
