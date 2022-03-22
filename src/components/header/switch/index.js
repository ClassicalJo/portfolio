export function switcher(canvas, language, options) {
    let scale = window.devicePixelRatio
    canvas.width = options.width * scale
    canvas.height = options.height * scale
    let config = {
        totalFrames: 10,
        buttonSize: { width: options.width / 2, height: options.height },
        positions: { 0: 0, 1: options.width / 2 },
        animating: false,
        values: ['en', 'es'],
        onStart: () => { },
        onEnd: () => { },
        ...options
    }


    let ctx = canvas.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(scale, scale)
    let { positions, buttonSize, onEnd, values, totalFrames } = config
    let [W, H] = [options.width, options.height]
    let [W2, H2] = [W / 2, H / 2]
    let pos = { x: positions[values.indexOf(language)], y: 0 }
    let direction = pos.x < W2 ? 1 : -1
    let progress = () => pos.x / W2
    let background = function () {
        ctx.fillStyle = 'hsl(0,0%,96%)'
        ctx.fillRect(0, 0, W, H)
    }
    let button = function () {
        ctx.fillStyle = `hsl(0,0%, ${progress() * 100}%)`
        ctx.fillRect(pos.x, pos.y, buttonSize.width, buttonSize.height)
    }
    let border = function () {
        ctx.strokeStyle = 'rgba(0,0,0,0.1)'
        ctx.strokeRect(pos.x, pos.y, W2, H)
        ctx.strokeRect(0, 0, W, H)
    }

    let draw = function () {
        ctx.clearRect(0, 0, W, H)
        background()
        button()
        border()
    }

    let drawText = function (text) {
        ctx.font = "24px Josefin Sans"
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = `hsl(0,0%, ${Math.abs(-100 + progress() * 100)}%)`
        ctx.fillText(text, pos.x + W2 / 2, H2)
    }

    let update = function () {
        let sx = W2 / totalFrames
        pos.x += sx * direction
    }
    let animate = function (frames) {
        update()
        draw()
        if (frames > 1) requestAnimationFrame(() => animate(frames - 1))
        else onEnd()
    }

    draw()
    drawText(language)

    return {
        isAnimating: function () {
            return config.animating
        },
        toggle: function () {
            config.animating = true
            animate(totalFrames)
        }

    }
}
