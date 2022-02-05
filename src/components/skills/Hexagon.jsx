import { useLayoutEffect, useRef } from "react";
import { animation } from "./animation"

export default function Hexagon({ ready }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]

    useLayoutEffect(() => {
        let swirl = animation(canvasRef.current)
        function animate() {
            requestAnimationFrame(() => {
                swirl.update()
                swirl.render()
                animate()
            })
        }

        if (ready) animate()
    }, [ready])

    return (
        <canvas
            role="img"
            aria-label="Chart A: Time spent learning about... (%). 1. Javascript: 100%. 2. ReactJS: 90%. 3. Express: 70%. 4. PostgreSQL: 60%. 5. NextJS: 80%. 6. UI/UX: 60%."
            ref={canvasRef} {...{ width, height }}
        />
    )
}
