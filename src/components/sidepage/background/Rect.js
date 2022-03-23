export class Rect {
    constructor(canvasWidth, canvasHeight) {
        this.props = {
            body: {
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                width: Math.random() * 200,
                height: Math.random() * 50,
                angle: Math.random() * Math.PI * 2,
                direction: Math.sin(Math.random() * 100) > 0 ? 1 : -1,
                opacity: 0
            },
            color: {
                r: Math.random() * 255,
                g: Math.random() * 255,
                b: Math.random() * 255,
            }
        }
    }
    render(ctx) {
        let { x, y, width, height, angle, opacity } = this.props.body
        let { r, g, b } = this.props.color
        ctx.beginPath()
        ctx.setTransform(1, 0, 0, 1, x, y)
        ctx.rotate(angle)
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity / 100})`
        ctx.fillRect(width / -2, height / -2, width, height)

    }
    update() {

        if (this.props.body.opacity < 101) this.props.body.opacity+=10
        this.props.body.angle += Math.PI / 180 * this.props.body.direction
        this.props.body.x += Math.sin(this.props.body.angle) * 2
        this.props.body.y += Math.sin(this.props.body.angle) * 2
    }
}
