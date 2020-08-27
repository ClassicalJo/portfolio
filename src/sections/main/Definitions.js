import React from 'react'
import Lobo from "../../images/svg/Lobo"
import Vanes from "../../images/svg/Vanes"
import Cloud from "../../images/svg/Cloud"
import Grass from "../../images/svg/Grass"
import Sea from "../../images/svg/Sea"
import Waves from "../../images/svg/Waves"
import Pine from "../../images/svg/Pine"
import Dice from "../../images/svg/Dice"
import Bishop from "../../images/svg/Bishop"
import Knight from "../../images/svg/Knight"
import Tower from "../../images/svg/Tower"
import Cards from "../../images/svg/Cards"
import Clock from "../../images/svg/Clock"
import Boat from "../../images/svg/Boat"
import Luna from "../../images/svg/Luna"


let cos = angle => Math.cos(angle * Math.PI / 180)
let sin = angle => Math.sin(angle * Math.PI / 180)

let clouds = { 30: 275, 90: 285, 150: 293, 210: 280, 270: 280, 330: 270 }

const Definitions = () => {
    return (
        <React.Fragment>
            <defs>
                <linearGradient id="chess" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#306BAC" stopOpacity="0" />
                    <stop offset="35%" stopColor="#306BAC" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="twilight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="50%" stopColor="transparent" stopOpacity="0" />
                    <stop offset="85%" stopColor="#141B41" stopOpacity="0.9" />
                </linearGradient>
            </defs>

            <svg x="-3000" y='-1500' width="6000" height="6000" id="loboland" viewBox="-500 -500 1000 1000" >
                <g transform="rotate(0)">
                    <circle cx={340 * cos(270)} cy={340 * sin(270)} r="25" fill="white" />

                    {Object.keys(clouds).map((key, index) => (

                        <Cloud key={`cloud${index}`} position={{ x: clouds[key] * cos(270), y: clouds[key] * sin(270) }} ratio="0.25" rotation={key} />
                    ))}
                    <Pine x={225 * cos(270)} y={225 * sin(270)} rotation="340" ratio="0.15" />
                    <Pine x={225 * cos(270)} y={225 * sin(270)} rotation="315" ratio="0.15" />

                    <Lobo x={202 * cos(270)} y={202 * sin(270)} width="25" height="25" angle="0" />
                    <Lobo x={202 * cos(80)} y={202 * sin(80)} width="25" height="25" angle={170 * Math.PI / 180} />

                    <Vanes x={235 * cos(270)} y={235 * sin(270)} ratio={8} rotation="25" />
                    <Vanes x={210 * cos(270)} y={210 * sin(270)} ratio={15} rotation="35" />
                    <Vanes x={225 * cos(270)} y={225 * sin(270)} ratio={10} rotation="45" />

                    <Dice number="5" x={194 * cos(270)} y={194 * sin(270)} ratio="0.0135" rotation="60.25" />
                    <Dice number="3" x={194 * cos(270)} y={194 * sin(270)} ratio="0.0135" rotation="62" />
                    <Knight x={202 * cos(270)} y={202 * sin(270)} ratio="0.05" rotation="75" />
                    <Bishop x={202 * cos(270)} y={202 * sin(270)} ratio="0.05" rotation="66" />
                    <Tower x={235 * cos(270)} y={235 * sin(270)} ratio="0.2" rotation="90" />

                    <Cards suit="diamonds" x={230 * cos(270)} y={230 * sin(270)} ratio="0.1" rotation="118.5" />
                    <Cards suit="spades" x={215 * cos(270)} y={215 * sin(270)} ratio="0.1" rotation="125" />
                    <Cards suit="hearts" x={230 * cos(270)} y={230 * sin(270)} ratio="0.1" rotation="131.5" />
                    <Cards suit="clubs" x={215 * cos(270)} y={215 * sin(270)} ratio="0.1" rotation="138" />
                    <Cards suit="diamonds" x={230 * cos(270)} y={230 * sin(270)} ratio="0.1" rotation="145.5" />
                    <Clock x={215 * cos(270)} y={215 * sin(270)} ratio="0.1" rotation="180" />
                    <Boat x={200 * cos(270)} y={200 * sin(270)} ratio="0.1" rotation="270" />

                    <Sea />
                    <Waves />
                    <Grass width="500" height="500" x="0" y="0" />

                    <rect x="-500" y="-500" width="1000" height="1000" fill="url(#twilight)" />
                    <Luna x={350 * cos(270)} y={350 * sin(270)} ratio="0.1" rotation="180" />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="-360 0 0"
                        dur="180s"
                        repeatCount='indefinite'
                        begin='0s'
                    />
                </g>

            </svg>
        </React.Fragment>
    )
}
export default Definitions
