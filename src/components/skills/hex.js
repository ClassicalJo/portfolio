let ease = x => Math.sin((x * Math.PI) / 2)

export class Hex {
    constructor(rx, ry, values = [1, 1, 1, 1, 1, 1]) {
        this.values = values
        this.rx = rx
        this.ry = ry
        this.time = 0
        this.lifetime = 0
        this.totalTime = 48
        this.vertices = this.setVertices()
        this.lineOpacity = 0
    }
    setVertices() {
        return new Array(6)
            .fill("")
            .map((k, i) => Math.PI * 2 / 6 * i + Math.PI / 2)
            .map((vertex, i) => this.getPosition(
                vertex,
                this.animatedRadius(this.rx),
                this.ry
            ))
    }
    animatedRadius(r) {
        return ease(this.time / this.totalTime) * r
    }
    getPosition(angle, rx, ry) {
        return { x: rx * Math.cos(angle), y: ry * Math.sin(angle) }
    }
    color(x, y, col, ctx) {
        ctx.beginPath()
        this.vertices.forEach((k, i) => ctx.lineTo(k.x * this.values[i], k.y * this.values[i]))
        ctx.lineTo(this.vertices[0].x * this.values[0], this.vertices[0].y * this.values[0])
        let grad = ctx.createRadialGradient(x, y, 2 * Math.max(this.rx, this.ry), x, y, 2 * Math.max(this.rx, this.ry) / 10)
        grad.addColorStop(.2, "rgba(255,255,255,0)")
        grad.addColorStop(1, col)
        ctx.fillStyle = grad
        ctx.fill()
    }
    lines(ctx) {
        ctx.beginPath()
        this.vertices.forEach(k => ctx.lineTo(k.x, k.y))
        ctx.lineTo(this.vertices[0].x, this.vertices[0].y)
        ctx.setLineDash([350, 200])
        ctx.strokeStyle = `rgba(0,0,0,${this.lineOpacity / 100})`
        ctx.lineDashOffset = -this.lifetime * 2.5
        ctx.lineWidth = 3
        ctx.stroke()
    }
    web(ctx) {
        ctx.setLineDash([10, 5])
        ctx.strokeStyle = `rgba(0,0,0,${this.lineOpacity / 100})`
        ctx.lineDashOffset = this.lifetime / 4
        ctx.lineWidth = .3
        for (let int = 0; int < 5; int++) {
            ctx.beginPath()
            let webMap = this.vertices.map(k => ({
                x: k.x * (int / 5),
                y: k.y * (int / 5)
            }))
            webMap.forEach(k => ctx.lineTo(k.x, k.y))
            ctx.lineTo(webMap[0].x, webMap[0].y)
            ctx.stroke()
        }

        this.vertices.forEach(k => {
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(k.x, k.y)
            ctx.stroke()
        })
    }
    words(ctx) {
        let names = ['UI/UX','Javascript', 'ReactJS', 'Express', 'PostgreSQL', "NextJS" ]
        ctx.font = '18px Josefin Sans'
        names.forEach((k, i) => {
            let show = this.lifetime > 10 * i + this.totalTime
            let cycle = Math.min((this.lifetime - 10 * i - this.totalTime) / 100, 1)
            let opacity = show ? ease(cycle) : 0
            let index = (i + 2) % 6
            let { x, y } = this.vertices[index]
            if (y > 0) y += 40
            if (y < 0) y += -25
            ctx.textAlign = 'center'
            
            ctx.fillStyle = `rgba(0,0,0,${opacity})`
            
            ctx.fillText(k, x, y)
        })
    }
    render(ctx) {
        let angle = this.lifetime / this.totalTime
        let unit = Math.PI / 2
        let a = angle + unit
        let b = angle + unit * 2
        let c = angle + unit * 3

        let getX = (a) => Math.cos(a) * 100
        let getY = (a) => Math.sin(a) * 100

        this.color(getX(b), getY(b), "rgba(255,0,0,.15)", ctx)
        this.color(getX(angle), getY(angle), "rgba(0,255,255,.15)", ctx)
        this.color(getX(a), getY(a), "rgba(0,0,255,.15)", ctx)
        this.color(getX(c), getY(c), "rgba(0,255,0,.15)", ctx)
        this.web(ctx)
        this.lines(ctx)
        this.words(ctx)

    }
    update() {
        if (this.time < this.totalTime) {
            this.vertices = this.setVertices()
            this.time++
        } else if (this.lineOpacity < 20) this.lineOpacity++


        this.lifetime++
    }
}

