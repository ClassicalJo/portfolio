import { useLayoutEffect, useRef } from "react";
import { animation } from "./animation"
import text from './text.json'

export default function Hexagon({ ready, language }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]
    useLayoutEffect(() => {
        let swirl = animation(canvasRef.current, language)
        let frame;
        function animate() {
            frame = requestAnimationFrame(() => {
                swirl.update()
                swirl.render()
                animate()
            })
        }
        if (ready) animate()
        return () => cancelAnimationFrame(frame)
    }, [ready, language])

    return (
        <canvas
            className="animation"
            role="img"
            aria-label={text.description}
            ref={canvasRef} {...{ width, height }}
        />
    )
}
