import { Swirl } from './swirl'
let ease = x => Math.sin((x * Math.PI) / 2)

export class Hex {
    constructor(rx, ry, values = [1, 1, 1, 1, 1, 1], originCanvas) {
        this.rx = rx
        this.ry = ry
        console.log(this.rx, this.ry)
        this.values = values
        this.origin = originCanvas
        this.canvas = this.createCanvas(originCanvas)
        this.time = 0
        this.lifetime = 0
        this.totalTime = 48
        this.vertices = this.setVertices()
        this.lineOpacity = 0
        this.background = new Swirl(this.rx, this.ry, originCanvas).canvas
    }
    createCanvas(origin) {
        let canvas = document.createElement('canvas')
        canvas.width = origin.width
        canvas.height = origin.height

        let ctx = canvas.getContext('2d')
        ctx.translate(canvas.width/2, canvas.height/2)
        return canvas
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
        let names = ['UI/UX', 'Javascript', 'ReactJS', 'Express', 'PostgreSQL', "NextJS"]
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
    swirl(ctx) {
        let memCanvas = document.createElement('canvas')
        let memCtx = memCanvas.getContext('2d')
        let [WIDTH, HEIGHT] = [this.origin.width, this.origin.height]
        let [W2, H2] = [WIDTH / 2, HEIGHT / 2]
        memCanvas.width = WIDTH
        memCanvas.height = HEIGHT
        memCtx.translate(W2, H2)
        memCtx.save()
        memCtx.rotate(this.lifetime * Math.PI / 180)
        memCtx.drawImage(this.background, this.background.width / -2, this.background.height / -2, this.background.width, this.background.height)
        memCtx.restore()
        memCtx.globalCompositeOperation = 'destination-in'
        this.vertices.forEach((k, i) => memCtx.lineTo(k.x * this.values[i], k.y * this.values[i]))
        memCtx.fillStyle = "rgba(0,0,0,1)"
        memCtx.fill()
        ctx.drawImage(memCanvas, -W2, -H2)
    }
    render() {
        let ctx = this.canvas.getContext('2d')
        ctx.fillStyle = "rgba(255,255,255,0.1)"
        ctx.fillRect(this.canvas.width / -2, this.canvas.height / -2, this.canvas.width, this.canvas.height)
        this.swirl(ctx)
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

