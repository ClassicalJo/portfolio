import { useLayoutEffect, useRef } from "react";
import { animation } from "./animation"
import { Context } from "../common/Context"
import { useContext } from "react"
import text from './text.json'

export default function Hexagon({ ready }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]
    let { language } = useContext(Context)

    useLayoutEffect(() => {
        let swirl = animation(canvasRef.current, language.current)
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
            role="img"
            aria-label={text.description}
            ref={canvasRef} {...{ width, height }}
        />
    )
}
