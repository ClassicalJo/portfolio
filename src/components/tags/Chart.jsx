import { useRef, useLayoutEffect, useContext } from "react"
import { Context } from "../common/Context"
import { cloud } from "./animation"

export default function Chart({ tags }) {
    let canvasRef = useRef()
    let [width, height] = [506.25, 900]
    let { language } = useContext(Context)
    useLayoutEffect(() => {
        let galaxy = cloud(canvasRef.current, tags, language.current)
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
            aria-label={JSON.stringify(tags)}
            ref={canvasRef} {...{ width, height }}
        />
    )
}
