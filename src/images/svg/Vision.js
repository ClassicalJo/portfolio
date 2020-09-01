import React from 'react'

let [width, height] = [1000, 500]
let [dur, begin, repeatCount] = ["20s", "0s", "indefinite"]
let colors = ["#306BAC", "#F7A8B8", "#ffde3f", "#FE4A49"]
let animationProps = {
    common: {
        dur, begin, repeatCount,
        keyTimes: "0;0.25;0.5;0.75;1",
    }
}
let r = 2.5
let columns = 20
let columnSpacing = 75
let rowSpacing = 25
let rows = 40
let arr = new Array(rows)
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(columns).fill("").map((key, index) => (
        <circle
            key={`row${i}column${index}`}
            cx={index * columnSpacing + (i % 2 === 0 ? columnSpacing / 2 : 0)}
            cy={i * rowSpacing + height / -2}
            fill="white"
            r={r}>
        </circle>
    ))
}
let flat = arr.flat()

let Vision = () => {
    return (
        <svg
            className="vision"
            viewBox="0 0 500 250"
            preserveAspectRatio="xMidYMid slice"
            opacity="0">
            <def>
                <Slogan id="t0" color="#ac5f30">I will develop your App</Slogan>
                <Slogan id="t1" color="#b7f7a8">I will develop your Site</Slogan>
                <Slogan id="t2" color="#bc3fff">I will develop your Game</Slogan>
                <Slogan id="t3" color="#49fe4c">I will develop your Vision</Slogan>
            </def>

            <mask id="myMask">
                <rect width="500" height="250" fill="black" />
                <circle cx="250" cy="125" r="125" fill="white" />
            </mask>

            <mask id="balls">
                {flat}
            </mask>

            <g mask="url(#myMask)">
                <rect width={width} height={height}>
                    <animate
                        {...animationProps.common}
                        attributeName="fill"
                        calcMode='discrete'
                        values={`${colors[0]};${colors[1]};${colors[2]};${colors[3]};${colors[0]}`}
                    />
                </rect>
                <rect
                    width="1000"
                    height="500"
                    fill='black'
                    mask="url(#balls)">
                    <animate
                        attributeName="fill"
                        {...animationProps.common}
                        values="white;black;white;black;white"
                        calcMode="discrete"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0 0; -125 -125; -250 0; -125 -125; 0 0"
                        {...animationProps.common}
                    />
                </rect>
                <use href="#t0" >
                    <animate
                        attributeName="href"
                        values="#t0; #t1; #t2; #t3; #t0"
                        calcMode="discrete"
                        {...animationProps.common}
                    />
                </use>
                <rect width={width} height={height} transform="rotate(-90)">
                    <animate
                        {...animationProps.common}
                        attributeName="fill"
                        keyTimes="0    ;.025    ;.225    ;.25   ;.275 ; .475;.5  ;.525;.725;.75   ;.775 ;.975 ;1"
                        values={`${colors[0]};${colors[0]};${colors[1]};${colors[1]};${colors[1]};${colors[2]};${colors[2]};${colors[2]};${colors[3]};${colors[3]};${colors[3]};${colors[0]};${colors[0]}`}
                        calcMode="discrete"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        {...animationProps.common}
                        keyTimes="0;.025;.225;.25;.275; .475;.5 ;.525;.725;.75 ;.775 ;.975;1"
                        values="0  ;  90; 270;360; 450; 630 ;720;810 ; 990;1080; 1170;1350;1440"
                    />
                </rect>
                <circle stroke="rgba(0,0,0,0.25)" cy="50%" cx="50%" fill="transparent" r="125" transform="translate(0.5 0.5)"/>
            </g>
            <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin=".25s"
                dur="0.5s"
                fill="freeze"
            />
        </svg >
    )
}

export default Vision

let Slogan = ({ id, color, children }) => {
    return (
        <g id={id}>
            <text
                fill="rgba(0,0,0,0.75)"
                fontSize="15"
                textAnchor='middle'
                fontWeight="1000"
                alignmentBaseline="central"
                x="250.5"
                y="125.5">
                {children}
            </text>
            <text
                fill={color}
                fontSize="15"
                textAnchor='middle'
                fontWeight="1000"
                alignmentBaseline="central"
                x="250"
                y="125">
                {children}
            </text>

        </g>
    )
}


