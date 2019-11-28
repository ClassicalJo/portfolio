import React from "react"

const Canvas = React.forwardRef((props, ref) => (
    <canvas
        ref={ref}
        className="canvas"
        width={props.canvasFrame.width}
        height={props.canvasFrame.height}>
    </canvas>
));

export default Canvas