import { useEffect, useRef } from "react"
import { Rect } from "./Rect"

export default function Background() {
    useEffect(() => {
        let canvas = ref.current
        let ctx = canvas.getContext('2d')
        let bodies = []
        let animation;
        function update() {
            if(bodies.length < 200) bodies.push(new Rect(canvas.width, canvas.height))
            bodies.forEach(k => k.update())
        }
        function render() {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.fillStyle = "rgba(255,255,255,.2)"
            ctx.fillRect(0, 0, 1900, 1080)
            bodies.forEach(k => k.render(ctx))            
        }
        function animate() {
            animation = requestAnimationFrame(() => {
                update()
                render()
                animate()
            })
        }
        animate()
        return () => cancelAnimationFrame(animation)
    }, [])
    let ref = useRef()
    return (
        <div className="background">
            <canvas width="1900" height="1080" ref={ref}></canvas>
        </div>
    )
}
