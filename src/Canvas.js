import React from "react"

const Canvas = (props) => {
    return (<canvas id="canvas" className="canvas" width={props.frame.width} height={props.frame.height}></canvas>
    )
}


export default Canvas