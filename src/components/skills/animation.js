import { Hex } from "./hex.js"
import { Title } from "./title.js"
import text from './text.json'
export const animation = (canvas, language) => {
    let ctx = canvas.getContext('2d')
    let verticalMargin = 150
    let horizontalMargin = 25
    let height = canvas.height - verticalMargin * 2
    let width = canvas.width - horizontalMargin * 2
    let hex = new Hex(width / 2, height / 2, [.6, .8, .6, 1, .9, .7], canvas)
    let title = new Title(0, canvas.height / -2 + 48, text.title[language])
    ctx.setTransform(1, 0, 0, 1, width / 2 + horizontalMargin, height / 2 + verticalMargin)
    
    return ({
        bodies: [hex, title],
        update: function () {
            this.bodies.forEach(k => k.update())
        },
        render: function () {
            let ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvas.width / -2, canvas.height / -2)
            ctx.drawImage(hex.canvas, hex.canvas.width / -2, hex.canvas.height / -2, hex.canvas.width, hex.canvas.height)
            this.bodies.forEach(k => k.render(ctx))
        }
    })
}
