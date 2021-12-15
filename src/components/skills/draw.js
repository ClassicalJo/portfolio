function getPosition(angle, r) {
    return { x: r * Math.cos(angle), y: r * Math.sin(angle) }
}

export function translate(ctx, width, height) {
    ctx.translate(width, height)
}

export function drawHexagon(ctx, r, timing) {
    let lineWidth = 2
    let smallLineWidth = lineWidth / 10

    function hexagon(r, fns = []) {
        ctx.beginPath()
        fns.forEach(k => k())
        let { x, y } = getPosition(0, r)
        ctx.moveTo(x, y)
        for (let i = 0; i <= 6; i++) {
            let { x, y } = getPosition(Math.PI * 2 / 6 * i, r)
            ctx.lineTo(x, y)
        }
        ctx.stroke()
    }
    function web(times) {
        for (let int = 0; int < times; int++) {
            hexagon(r / times * int, [
                () => ctx.setLineDash([5, 10]),
                () => ctx.strokeStyle = "black",
                () => ctx.lineDashOffset = 500 - 500 * timing / 1000,
                () => ctx.lineWidth = smallLineWidth
            ])
        }
    }
    function lines(r, fns = []) {
        ctx.beginPath()
        fns.forEach(k => k())
        for (let i = 0; i <= 6; i++) {
            let { x, y } = getPosition(Math.PI * 2 / 6 * i, r)
            ctx.moveTo(0, 0)
            ctx.lineTo(x, y)
        }
        ctx.stroke()
    }

    hexagon(r, [
        () => ctx.setLineDash([525, 500]),
        () => ctx.strokeStyke = "black",
        () => ctx.lineDashOffset = 500 - 500 * timing / 100,
        () => ctx.lineWidth = lineWidth
    ])
    web(5)
    lines(r)


}

export function drawSkillHexagon(ctx, r, arr = [1, 1, 1, 1, 1, 1],time) {
    function color(x, y, col) {
        ctx.beginPath()
        let origin = getPosition(0, r * arr[0])

        arr.forEach((k, i) => {
            let { x, y } = getPosition(Math.PI * 2 / 6 * i, r * arr[i])
            ctx.lineTo(x, y)
        })
        ctx.lineTo(origin.x, origin.y)
        let grad = ctx.createRadialGradient(x, y, r, x, y, r / 10)
        grad.addColorStop(.2, "rgba(255,255,255,0)")
        grad.addColorStop(1, col)
        ctx.fillStyle = grad
        ctx.fill()
        
    }

    let angle = (time/2 % 360) * Math.PI / 180
    let unit = Math.PI / 2
    let a = angle + unit
    let b = angle + unit * 2
    let c = angle + unit * 3

    let getX = (a) => Math.cos(a) * 100
    let getY = (a) => Math.sin(a) * 100

    color(getX(b), getY(b), "rgba(255,0,0,.15)")
    color(getX(angle), getY(angle), "rgba(0,255,255,.15)")
    color(getX(a), getY(a), "rgba(0,0,255,.15)")  
    color(getX(c), getY(c), "rgba(0,255,0,.15)")
    
}

export function drawCircle(ctx, r) {
    ctx.beginPath()
    ctx.lineWidth = '1'
    ctx.arc(0, 0, r, 0, 2 * Math.PI)
    ctx.fill()
}

export function resetTranslation(ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

export function drawText(ctx, r) {
    let names = ['Javascript', 'ReactJS', 'Express', 'PostgreSQL', "NextJS", 'UI/UX']
    ctx.font = '32px Josefin Sans'
    ctx.fillStyle = "black"
    names.forEach((k, i) => {
        let theta = Math.PI * 2 / 6 * i
        let { x, y } = getPosition(theta, r)
        ctx.textAlign = x > 0 ? 'left' : 'right'
        ctx.fillStyle = 'cyan'
        ctx.fillText(k, x - 2.5, y)
        ctx.fillStyle = 'red'
        ctx.fillText(k, x + 2.5, y)
        ctx.fillStyle = 'black'
        ctx.fillText(k, x, y)
    })
}