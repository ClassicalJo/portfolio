import React, { useState, useEffect } from 'react'

let Clock = props => {
    let { x, y, ratio } = { ...props }
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        let interval = setInterval(() => setDate(new Date()), 500)
        return () => clearInterval(interval)
    }, [])
    return (
        <g transform={`rotate(${props.rotation} 0 0)`}>
            <path d={`M ${x + -200 * ratio} ${y + 100 * ratio} Q ${x + 0 * ratio} ${y + -100 * ratio} ${x + -100 * ratio} ${y + 250 * ratio} H ${x + 100 * ratio} Q ${x + 0 * ratio} ${y + -100 * ratio} ${x + 200 * ratio} ${y + 100 * ratio}L ${x + 0 * ratio} ${y + -250 * ratio}`} fill="#141B41" />
            <circle cx={x} cy={y - 50 * ratio} r={150 * ratio} stroke="#141B41" strokeWidth={20 * ratio} fill="white" />
            <circle cx={x} cy={y - 50 * ratio} r={140 * ratio} fill="whitesmoke" stroke="#141B41" strokeWidth={10 * ratio} />
            <circle cx={x} cy={y - 50 * ratio} r={140 * ratio} fill="transparent" stroke="whitesmoke" strokeWidth={10 * ratio} strokeDasharray={`${(140 * ratio * Math.PI / 50)} ${(140 * ratio * Math.PI / 50)}`}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y - 50 * ratio}`}
                    to={`360 ${x} ${y - 50 * ratio}`}
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={x} cy={y - 50 * ratio} r={130 * ratio} fill="transparent" stroke="#306BAC" strokeWidth={10 * ratio} strokeDasharray={`${(130 * ratio * Math.PI / 50)} ${(130 * ratio * Math.PI / 50)}`}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y - 50 * ratio}`}
                    to={`-360 ${x} ${y - 50 * ratio}`}
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={x} cy={y - 50 * ratio} r={120 * ratio} fill="whitesmoke" stroke="#141B41" strokeWidth={10 * ratio} />
            <circle cx={x} cy={y - 50 * ratio} r={120 * ratio} fill="transparent" stroke="whitesmoke" strokeWidth={10 * ratio} strokeDasharray={`${(120 * ratio * Math.PI / 50)} ${(120 * ratio * Math.PI / 50)}`}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y - 50 * ratio}`}
                    to={`360 ${x} ${y - 50 * ratio}`}
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={x} cy={y - 50 * ratio} r={110 * ratio} fill="transparent" stroke="#306BAC" strokeWidth={10 * ratio} strokeDasharray={`${(110 * ratio * Math.PI / 50)} ${(110 * ratio * Math.PI / 50)}`} >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y - 50 * ratio}`}
                    to={`-360 ${x} ${y - 50 * ratio}`}
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
            <g transform={`rotate(-90 ${x} ${y - 50 * ratio})`}>
                <line x1={x} y1={y - 50 * ratio} x2={90 * ratio * Math.cos(date.getMinutes() * (2 * Math.PI / 60))} y2={y - 50 * ratio + 90 * ratio * Math.sin(date.getMinutes() * (2 * Math.PI / 60))} strokeWidth={10 * ratio} stroke="#306BAC" strokeLinecap="round" />
                <line x1={x} y1={y - 50 * ratio} x2={50 * ratio * Math.cos(date.getHours() % 12 * (2 * Math.PI / 12))} y2={y - 50 * ratio + 50 * ratio * Math.sin(date.getHours() % 12 * (2 * Math.PI / 12))} strokeWidth={10 * ratio} stroke="#141B41" strokeLinecap="round" />
                <line x1={x} y1={y - 50 * ratio} x2={100 * ratio * Math.cos(date.getSeconds() * (2 * Math.PI / 60))} y2={y - 50 * ratio + 100 * ratio * Math.sin(date.getSeconds() * (2 * Math.PI / 60))} strokeWidth={2 * ratio} stroke="black" strokeLinecap="round" />
                <circle cx={x} cy={y - 50 * ratio} fill="#141B41" r={10 * ratio} />
            </g>
        </g>
    )
}

export default Clock
