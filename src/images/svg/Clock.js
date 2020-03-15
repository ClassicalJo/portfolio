import React from 'react'

let Clock = props => (
    <g transform={`rotate(${props.rotation} 0 0)`}>
        <path d={`M ${props.x + -200 * props.ratio} ${props.y + 100 * props.ratio} Q ${props.x + 0 * props.ratio} ${props.y + -100 * props.ratio} ${props.x + -100 * props.ratio} ${props.y + 250 * props.ratio} H ${props.x + 100 * props.ratio} Q ${props.x + 0 * props.ratio} ${props.y + -100 * props.ratio} ${props.x + 200 * props.ratio} ${props.y + 100 * props.ratio}L ${props.x + 0 * props.ratio} ${props.y + -250 * props.ratio}`} fill="#141B41" />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={150 * props.ratio} stroke="#141B41" strokeWidth={20 * props.ratio} fill="white" />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={140 * props.ratio} fill="whitesmoke" stroke="#141B41" strokeWidth={10 * props.ratio} />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={140 * props.ratio} fill="transparent" stroke="whitesmoke" strokeWidth={10 * props.ratio} strokeDasharray={`${(140 * props.ratio * Math.PI / 50)} ${(140 * props.ratio * Math.PI / 50)}`} transform={`rotate (${props.date.getMilliseconds() * 0.0275} ${props.x} ${props.y - 50 * props.ratio})`} />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={130 * props.ratio} fill="transparent" stroke="#306BAC" strokeWidth={10 * props.ratio} strokeDasharray={`${(130 * props.ratio * Math.PI / 50)} ${(130 * props.ratio * Math.PI / 50)}`} transform={`rotate (-${props.date.getMilliseconds() * 0.0275} ${props.x} ${props.y - 50 * props.ratio})`} />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={120 * props.ratio} fill="whitesmoke" stroke="#141B41" strokeWidth={10 * props.ratio} />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={120 * props.ratio} fill="transparent" stroke="whitesmoke" strokeWidth={10 * props.ratio} strokeDasharray={`${(120 * props.ratio * Math.PI / 50)} ${(120 * props.ratio * Math.PI / 50)}`} transform={`rotate (${props.date.getMilliseconds() * 0.0275} ${props.x} ${props.y - 50 * props.ratio})`} />
        <circle cx={props.x} cy={props.y - 50 * props.ratio} r={110 * props.ratio} fill="transparent" stroke="#306BAC" strokeWidth={10 * props.ratio} strokeDasharray={`${(110 * props.ratio * Math.PI / 50)} ${(110 * props.ratio * Math.PI / 50)}`} transform={`rotate (-${props.date.getMilliseconds() * 0.0275} ${props.x} ${props.y - 50 * props.ratio})`} />
        <g transform={`rotate(-90 ${props.x} ${props.y -50 * props.ratio})`}>
            <line x1={props.x} y1={props.y - 50 * props.ratio} x2={90 * props.ratio * Math.cos(props.date.getMinutes() * (2 * Math.PI / 60))} y2={props.y - 50 * props.ratio + 90 * props.ratio * Math.sin(props.date.getMinutes() * (2 * Math.PI / 60))} strokeWidth={10 * props.ratio} stroke="#306BAC" strokeLinecap="round" />}
            <line x1={props.x} y1={props.y - 50 * props.ratio} x2={50 * props.ratio * Math.cos(props.date.getHours() % 12 * (2 * Math.PI / 12))} y2={props.y - 50 * props.ratio + 50 * props.ratio * Math.sin(props.date.getHours() % 12 * (2 * Math.PI / 12))} strokeWidth={10 * props.ratio} stroke="#141B41" strokeLinecap="round" />}
            <line x1={props.x} y1={props.y - 50 * props.ratio} x2={100 * props.ratio * Math.cos(props.date.getSeconds() * (2 * Math.PI / 60))} y2={props.y - 50 * props.ratio + 100 * props.ratio * Math.sin(props.date.getSeconds() * (2 * Math.PI / 60))} strokeWidth={2 * props.ratio} stroke="black" strokeLinecap="round" />
            <circle cx={props.x} cy={props.y - 50 * props.ratio} fill="#141B41" r={10 * props.ratio} />
        </g>
    </g>
)

export default Clock
