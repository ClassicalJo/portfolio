import { useLayoutEffect, useRef} from "react";
import { drawHexagon, drawSkillHexagon, drawText, resetTranslation, translate } from "./draw";

export default function Hexagon({ready}) {
    let canvasRef = useRef()
    let [width, height] = [1900, 1080]
    let h = height * .95 / 2

    useLayoutEffect(() => {
        let count = 0
        let maxCount = 150
        let ctx = canvasRef.current.getContext('2d')
        let finalValues = [.9, .85, .75, .6, .7, .8]
        let values = [0, 0, 0, 0, 0, 0]

        function update() {
            count += (4.25 - 4 * (count / maxCount))
            values = finalValues.map(k => k * count / maxCount)
        }

        function render(ctx) {
            ctx.clearRect(-width / 2, -height / 2, width, height)
            drawSkillHexagon(ctx, h, values)
            drawHexagon(ctx, h)
            drawText(ctx, height / 2)
        }

        function animate(ctx) {
            requestAnimationFrame(() => {
                if (count < maxCount) {
                    update()
                    render(ctx)
                    animate(ctx)
                }
            })
        }

        resetTranslation(ctx)
        translate(ctx, width / 2, height / 2)
        render(ctx)
        if (ready) animate(ctx)
    }, [width, height, ready,h])

    return <canvas ref={canvasRef} {...{ width, height }} />
}
