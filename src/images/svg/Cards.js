import React from 'react'

let Diamonds = props => (
    <g transform={`rotate(-2 ${props.x} ${props.y})`}>
        <path d={`
            M ${props.x} ${props.y - 250 * props.ratio}
            Q ${props.x - 50 * props.ratio} ${props.y - 50 * props.ratio} ${props.x - 150 * props.ratio} ${props.y}
            Q ${props.x - 50 * props.ratio} ${props.y + 50 * props.ratio} ${props.x} ${props.y + 250 * props.ratio}
            Q ${props.x + 50 * props.ratio} ${props.y + 50 * props.ratio} ${props.x + 150 * props.ratio} ${props.y}
            Q ${props.x + 50 * props.ratio} ${props.y - 50 * props.ratio} ${props.x} ${props.y - 250 * props.ratio}
            Z`}
            fill="white" />
    </g>)

let Spades = props => (
    <path d={`
        M ${props.x + 20 * props.ratio}  ${props.y + 100 * props.ratio} 
        Q ${props.x + 20 * props.ratio}  ${props.y + 200 * props.ratio} ${props.x + 100 * props.ratio}  ${props.y + 250 * props.ratio} 
        H ${props.x - 100 * props.ratio} 
        Q ${props.x - 20 * props.ratio}  ${props.y + 200 * props.ratio} ${props.x - 20 * props.ratio}  ${props.y + 100 * props.ratio} 
        C ${props.x - 100 * props.ratio}  ${props.y + 200 * props.ratio} ${props.x - 250 * props.ratio}  ${props.y + 100 * props.ratio} ${props.x}  ${props.y - 200 * props.ratio} 
        C ${props.x + 250 * props.ratio}  ${props.y + 100 * props.ratio} ${props.x + 100 * props.ratio}  ${props.y + 200 * props.ratio} ${props.x + 20 * props.ratio}  ${props.y + 100 * props.ratio} 
        Z`}
        fill="#141B41"
    />
)

let Hearts = props => (
    <path d={`
        M ${props.x}  ${props.y - 100 * props.ratio} 
        C ${props.x}  ${props.y - 250 * props.ratio} ${props.x - 175 * props.ratio}  ${props.y - 200 * props.ratio} ${props.x - 175 * props.ratio}  ${props.y - 100 * props.ratio}
        C ${props.x - 175 * props.ratio}  ${props.y} ${props.x - 25 * props.ratio}  ${props.y + 50 * props.ratio} ${props.x}  ${props.y + 200 * props.ratio}
        M ${props.x}  ${props.y - 100 * props.ratio}
        C ${props.x}  ${props.y - 250 * props.ratio} ${props.x + 175 * props.ratio}  ${props.y - 200 * props.ratio} ${props.x + 175 * props.ratio}  ${props.y - 100 * props.ratio}
        C ${props.x + 175 * props.ratio}  ${props.y} ${props.x + 25 * props.ratio}  ${props.y + 50 * props.ratio} ${props.x}  ${props.y + 200 * props.ratio}
        Z`}
        fill="white"
        transform={`translate(0 ${20 * props.ratio})`} />
)

let Clubs = props => (
    <path d={`
        M ${props.x + 20 * props.ratio} ${props.y + 100 * props.ratio}
        Q ${props.x + 20 * props.ratio} ${props.y + 200 * props.ratio} ${props.x + 100 * props.ratio} ${props.y + 250 * props.ratio} 
        H ${props.x - 100 * props.ratio}
        Q ${props.x - 20 * props.ratio} ${props.y + 200 * props.ratio} ${props.x - 20 * props.ratio} ${props.y + 100 * props.ratio}
        C ${props.x - 250 * props.ratio} ${props.y + 300 * props.ratio} ${props.x - 250 * props.ratio} ${props.y - 200 * props.ratio} ${props.x - 20 * props.ratio} ${props.y + 20 * props.ratio}
        C ${props.x - 250 * props.ratio} ${props.y - 300 * props.ratio} ${props.x + 250 * props.ratio} ${props.y - 300 * props.ratio} ${props.x + 20 * props.ratio} ${props.y + 20 * props.ratio}
        C ${props.x + 250 * props.ratio} ${props.y - 200 * props.ratio} ${props.x + 250 * props.ratio} ${props.y + 300 * props.ratio} ${props.x + 20 * props.ratio} ${props.y + 100 * props.ratio}
        Z`}
        fill="#141B41" 
        />
)

let Cards = props => {
    switch (props.suit) {
        case "hearts": return <g transform={`rotate(${props.rotation} 0 0)`}><Hearts x={props.x} y={props.y} ratio={props.ratio} /></g>
        case "diamonds": return <g transform={`rotate(${props.rotation} 0 0)`}><Diamonds x={props.x} y={props.y} ratio={props.ratio} /></g>
        case "spades": return <g transform={`rotate(${props.rotation} 0 0)`}><Spades x={props.x} y={props.y} ratio={props.ratio} /></g>
        case "clubs": return <g transform={`rotate(${props.rotation} 0 0)`}><Clubs  x={props.x} y={props.y} ratio={props.ratio}/></g>
        default: return <g transform={`rotate(${props.rotation} 0 0)`}><Diamonds /></g>
    }
}

export default Cards
