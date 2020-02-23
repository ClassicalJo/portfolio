import React from 'react'

let Cloud = props => {
    return (
        <path
            key={props.id}
            d={`
                    M ${props.position.x - 50} ${props.position.y + 50} 
                    H ${props.position.x + 50} 
                    Q ${props.position.x + 30} ${props.position.y},
                    ${props.position.x} ${props.position.y + 25},
                    Q ${props.position.x - 15} ${props.position.y},
                    ${props.position.x - 30} ${props.position.y + 25}

                    Z`} fill="white"></path>
    )
}

export default Cloud
