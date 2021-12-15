import { useRef, useLayoutEffect } from "react"
import { clearRect, drawOrbit, drawTags, resetTranslation, translate } from "./draw"

export default function Chart({ tags }) {
    let canvasRef = useRef()
    let [width, height] = [1900, 1080]
    let h = height * .9
    let w = width * .9

    useLayoutEffect(() => {
        let angle = 0
        let ctx = canvasRef.current.getContext('2d')

        function update() {
            angle += (180 / Math.PI) *0.00004
        }

        function render(ctx) {
            ctx.fillStyle = 'rgba(255,255,255,0.4)'
            ctx.fillRect(-width / 2, -height / 2, width, height)
            drawOrbit(ctx, width / 3.3, height / 3.3)
            drawTags(ctx, w, h, tags, angle)

        }

        function animate(ctx) {
            requestAnimationFrame(() => {
                update()
                render(ctx)
                animate(ctx)
            })
        }

        resetTranslation(ctx)
        translate(ctx, width / 2, height / 2)
        render(ctx)
        animate(ctx)
    }, [width, height, h, tags, w])

    return <canvas ref={canvasRef} {...{ width, height }} />
}
