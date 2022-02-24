export class Swirl {
    constructor(rx, ry, originCanvas) {
        this.canvas = this.createCanvas(originCanvas)
        this.rx = rx
        this.ry = ry
        this.translateCenter()
        this.draw(this.canvas)
    }
    color(x, y, col) {
        let ctx = this.canvas.getContext('2d')
        let maxR = Math.max(this.rx, this.ry)
        let grad = ctx.createRadialGradient(x, y, 1e-1, x, y, maxR * 4)
        grad.addColorStop(0, col)
        grad.addColorStop(1, "rgba(255,255,255,0)")
        ctx.fillStyle = grad
        let max = Math.max(this.canvas.width, this.canvas.height)
        ctx.fillRect(this.canvas.width / -2, this.canvas.height / -2, max, max)
    }
    draw() {
        let colors = [
            "hsla(0,100%,65%,.15)",
            "hsla(120,100%,65%,.15)",
            "hsla(240,100%,65%,.15)"
        ]
        for (let i = 0; i < 3; i++) {
            let unit = i * Math.PI * 2 / 3
            let r = Math.max(this.rx, this.ry)
            this.color(Math.cos(unit) * r, Math.sin(unit) * r, colors[i])
        }
    }
    createCanvas(origin) {
        let canvas = document.createElement("canvas")
        let max = Math.max(origin.width, origin.height)
        canvas.width = max
        canvas.height = max
        return canvas
    }
    translateCenter(){
        let ctx = this.canvas.getContext('2d')
        ctx.translate(this.canvas.width / 2, this.canvas.height / 2)
    }
}
