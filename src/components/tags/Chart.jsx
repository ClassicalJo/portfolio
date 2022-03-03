import { useRef, useLayoutEffect} from "react"
import { cloud } from "./animation"

export default function Chart({ tags, language }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]
    useLayoutEffect(() => {
        let galaxy = cloud(canvasRef.current, tags, language)
        let animation;
        function animate() {
            animation = requestAnimationFrame(() => {
                galaxy.update()
                galaxy.render()
                animate()
            })
        }
        animate()
        return () => cancelAnimationFrame(animation)
    }, [tags, language])
    return (
        <canvas
            role='img'
            className="animation"
            aria-label={JSON.stringify(tags)}
            ref={canvasRef} {...{ width, height }}
        />
    )
}
