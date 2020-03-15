import React from 'react'

const Dice3 = props => (
    <g transform="rotate(0 0 0)">
        <rect width={350 * props.ratio} height={350 * props.ratio} x={props.x - 175 * props.ratio} y={props.y - 175 * props.ratio} rx={50 * props.ratio} ry={50 * props.ratio} fill="white" stroke="whitesmoke" strokeWidth={20 * props.ratio} />
        <circle r={40 * props.ratio} cx={props.x} cy={props.y} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio} cy={props.y - 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x + 100 * props.ratio} cy={props.y + 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
    </g>
)
const Dice5 = props => (
    <g transform={`rotate(-25 ${props.x} ${props.y})`}>
        <rect width={350 * props.ratio} height={350 * props.ratio} x={props.x - 175 * props.ratio} y={props.y - 175 * props.ratio} rx={50 * props.ratio} ry={50 * props.ratio} fill="white" stroke="whitesmoke" strokeWidth={20 * props.ratio} />
        <circle r={40 * props.ratio} cx={props.x} cy={props.y} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio} cy={props.y - 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x + 100 * props.ratio} cy={props.y - 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x + 100 * props.ratio} cy={props.y + 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
        <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio} cy={props.y + 100 * props.ratio} fill="darkslategrey" opacity="0.5" />
    </g>
)

let Dice = props => {
    switch (props.number) {
        case "3": return <g transform={`rotate(${props.rotation} 0 0)`}><Dice3 x={props.x} y={props.y} ratio={props.ratio} /></g>
        case "5": return <g transform={`rotate(${props.rotation} 0 0)`}><Dice5 x={props.x} y={props.y} ratio={props.ratio} /></g>
        default: return <g transform={`rotate(${props.rotation} 0 0)`}><Dice3 x={props.x} y={props.y} ratio={props.ratio} /></g>
    }
}

export default Dice

    // < SVG viewBox = "-250 -250 500 500" size = "7.5" height = "194" rotation = "60.25" camera = { props.camera } >
    //     <g transform="rotate(-25 0 0)">
    //         <rect width="350" height="350" x="-175" y="-175" rx="50" ry="50" fill="white" stroke="whitesmoke" strokeWidth="20" />
    //         <circle r={40 * props.ratio} fill="darkslategrey" opacity="0.5" />
    //         <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio}"-100" cy={props. y -100} fill="darkslategrey" opacity="0.5" />
    //         <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio}"100" cy={props. y -100} fill="darkslategrey" opacity="0.5" />
    //         <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio}"100" cy={props. y 100"}fill="darkslategrey" opacity="0.5" />
    //         <circle r={40 * props.ratio} cx={props.x - 100 * props.ratio}"-100" cy={props. y 100"}fill="darkslategrey" opacity="0.5" />
    //     </g>
    //             </SVG >
