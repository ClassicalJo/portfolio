let ease = x => 1 - Math.pow(1 - x, 4);
export class Tag {
    constructor(tag, height, size) {
        this.tag = tag
        this.size = size
        this.canvasHeight = height
        this.fontSize = 22 + 5 * this.size
        this.pos = { x: 0, y: 0 }
    }
    setPosition(x, y) {
        this.pos = { x, y }
    }
    render(ctx) {
        ctx.font = this.fontSize + "px Josefin Sans"
        let opacity = Math.min(Math.abs(this.canvasHeight + this.pos.y), Math.abs(this.canvasHeight - this.pos.y), 100) / 100
        ctx.fillStyle = `rgba(230,230,100, ${ease(opacity)})`
        ctx.strokeStyle = "black"
        ctx.lineWidth=".3"
        ctx.fillText(this.tag, this.pos.x, this.pos.y)
        ctx.strokeText(this.tag, this.pos.x, this.pos.y)

    }
    update() {
        this.pos.y++
        return this.pos.y > this.canvasHeight
    }
}
