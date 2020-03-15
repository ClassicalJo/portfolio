import React from 'react'
let Cloud = props => {
    return (
        <path
            key={props.id}
            d={`
                    M ${props.position.x - 50 * props.ratio} ${props.position.y + 50 * props.ratio} 
                    H ${props.position.x + 50 * props.ratio} 
                    Q ${props.position.x + 30 * props.ratio} ${props.position.y},
                    ${props.position.x} ${props.position.y + 25 * props.ratio},
                    Q ${props.position.x - 15 * props.ratio} ${props.position.y},
                    ${props.position.x - 30 * props.ratio} ${props.position.y + 25 * props.ratio}
                    Z`}
            fill="white"></path>
    )
}

export default Cloud
