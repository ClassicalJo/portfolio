import { Hex } from "./hex.js"
import { Title } from "./title.js"

export const animation = canvas => {
    let ctx = canvas.getContext('2d')
    let verticalMargin = 150
    let horizontalMargin = 0
    let height = canvas.height - verticalMargin * 2
    let width = canvas.width - horizontalMargin * 2
    ctx.setTransform(1,0,0,1,0,0)
    ctx.translate(width / 2 + horizontalMargin, height / 2 + verticalMargin)

    return ({
        bodies: [
            new Hex(width / 2, height / 2, [.6, .8, .6, 1, .9, .7], canvas),
            new Title(0, canvas.height / -2 + 48, "Chart A: Focused learning about... (%)")
        ],
        update: function () {
            this.bodies.forEach(k => k.update())
        },
        render: function () {
            let { width, height } = canvas
            let ctx = canvas.getContext('2d')
            ctx.fillStyle = "rgba(255,255,255,0.1)"
            ctx.fillRect(width / -2, height / -2, width, height)
            this.bodies.forEach(k => k.render(ctx))
        }
    })
}
