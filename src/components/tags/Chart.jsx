import { useRef, useLayoutEffect } from "react"
import { cloud } from "./animation"

export default function Chart({ tags }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]
    useLayoutEffect(() => {
        let galaxy = cloud(canvasRef.current, tags)
        function animate() {
            requestAnimationFrame(() => {
                galaxy.update()
                galaxy.render()
                animate()
            })
        }
        animate()
    }, [tags])
    return (
        <canvas
            role='img'
            aria-label={JSON.stringify(tags)}
            ref={canvasRef} {...{ width, height }}
        />
    )
}
