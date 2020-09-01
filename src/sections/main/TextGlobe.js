import React from 'react'

let TextGlobe = ({ cx, cy }) => {
    let [width, height] = [40, 20]
    let begin = "1s"
    let fade = '9s'
    return (
        <g>

            <rect rx={height} x={cx} y={cy}  opacity="0.85"  width="0" height="0" fill="white" >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={`0 0`}
                    to={`${-width / 2} ${-height / 2}`}
                    dur="0.15s"
                    fill="freeze"
                    begin={begin}
                />
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={`${-width / 2} ${-height / 2}`}
                    to={`0 0`}
                    dur="0.15s"
                    fill="freeze"
                    begin={fade}
                />
                <animate
                    attributeName="width"
                    from="0"
                    to={width}
                    dur="0.15s"
                    fill="freeze"
                    begin={begin}
                />
                <animate
                    attributeName="height"
                    from="0"
                    to={height}
                    dur="0.15s"
                    fill="freeze"
                    begin={begin}
                />
                <animate
                    attributeName="width"
                    from={width}
                    to="0"
                    dur="0.15s"
                    fill="freeze"
                    begin={fade}
                />
                <animate
                    attributeName="height"
                    from={height}
                    to="0"
                    dur="0.15s"
                    fill="freeze"
                    begin={fade}
                />
            </rect>
            <text
                fontFamily="Arial"
                fontWeight="600"
                x={cx} y={cy}
                fontSize="5.5"
                fill="black"
                textLength="25"
                textAnchor="middle"
                alignmentBaseline="central"
                opacity="0"

            >
                Hi, i'm Jo
                <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    calcMode="discrete"
                    dur="0.20s"
                    fill="freeze"
                    begin={begin}
                />
                <animate
                    attributeName="opacity"
                    from="1"
                    to="0"
                    calcMode="discrete"
                    dur="0.20s"
                    fill="freeze"
                    begin={fade}
                />
            </text>
        </g >
    )
}

export default TextGlobe
