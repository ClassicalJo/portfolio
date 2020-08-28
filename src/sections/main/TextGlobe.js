import React from 'react'

let TextGlobe = ({ cx, cy }) => {
    let [width, height] = [40, 20]
    let begin = "1s"
    return (
        <g>

            <rect rx={height / 2} x={cx} y={cy} width="0" height="0" fill="white" >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={`0 0`}
                    to={`${-width / 2} ${-height / 2}`}
                    dur="0.15s"
                    fill="freeze"
                    begin={begin}
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
            </text>
        </g >
    )
}

export default TextGlobe
