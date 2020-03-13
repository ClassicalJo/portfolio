import React from 'react'

let Luna = props => {
    return (
        <React.Fragment>
            <mask id={props.id}>
                <rect x={props.cx - 500} y={props.cy - 500} height="1000" width="1000" fill="white" />
                <circle cx={props.cx - 50} cy={props.cy - 100} r="150" fill="black" />
            </mask>
            <circle cx={props.cx} cy={props.cy} r="175" fill="white" mask={`url(#${props.id})`} />
        </React.Fragment>
    )
}

export default Luna
