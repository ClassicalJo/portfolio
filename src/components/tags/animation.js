import { Title } from "./title"
import { Cloud } from "./cloud"

export const cloud = (canvas, tags) => {
    let ctx = canvas.getContext('2d')
    let verticalMargin = 150
    let horizontalMargin = 0
    let height = canvas.height - verticalMargin * 2
    let width = canvas.width - horizontalMargin * 2
    ctx.translate(width / 2 + horizontalMargin, height / 2 + verticalMargin)
    return ({
        bodies: [
            new Cloud(width/2, height/2, tags),
            new Title(0, canvas.height / -2 + 72, "Chart B: Skillstackverse "),
            
        ],
        update: function () {
            this.bodies.forEach(k => k.update())
        },
        render: function () {
            let ctx = canvas.getContext('2d')
            ctx.font = "22px Josefin Sans"
            ctx.fillStyle = "rgba(30,30,30,1)"
            ctx.fillRect(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height)
            this.bodies.forEach(k => k.render(ctx))
        }
    })
}
