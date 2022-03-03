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
        ctx.font = '24px Josefin Sans'
        ctx.textAlign = this.align
        ctx.fillStyle = `rgba(230,230,100, 1)`
        ctx.strokeStyle = "black"
        ctx.fillText(this.text, this.pos.x, this.pos.y)
        ctx.strokeText(this.text, this.pos.x, this.pos.y)
    }
}
