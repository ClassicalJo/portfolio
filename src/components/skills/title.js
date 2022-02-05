export class Title {
    constructor(x, y, text, align = 'center') {
        this.text = text
        this.pos = { x, y }
        this.align = align
    }
    update() {
        return
    }
    render(ctx) {
        ctx.fillStyle = "rgba(0,0,0,1)"
        ctx.font = '24px Josefin Sans'
        ctx.textAlign = this.align
        ctx.fillText(this.text, this.pos.x, this.pos.y)
    }
}
