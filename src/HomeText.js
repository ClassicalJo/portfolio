import React from 'react'

let text = (props) => {
    if (props) {
        return <React.Fragment>
            <p>>> Hey there, welcome.
                <br />>> Feel free to wander around...
                <br />>> <input className="input" type="text" onKeyDown={props.commands}></input>
            </p>
        </React.Fragment>
    } else {
        return <React.Fragment>
            <p>>> Welcome again.
                    <br />>> Feel free to wander around...
                    <br />>> <input className="input" type="text" onKeyDown={props.commands}></input>
            </p>
        </React.Fragment>
    }
}

let HomeText = (props) => {
    
    return (
        <div className="home-text-container">
            {text(props)}
        </div>)
}

HomeText.defaultProps = {
    showIntro: false
}

export default HomeText
