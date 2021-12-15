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

export function drawSkillHexagon(ctx, r, arr = [1, 1, 1, 1, 1, 1]) {
    ctx.beginPath()
    arr.forEach((k, i) => {
        let { x, y } = getPosition(Math.PI * 2 / 6 * i, r * arr[i])
        ctx.lineTo(x, y)
    })
    
    let grad = ctx.createRadialGradient(0, 0, r, 0, 0, r / 10000)
    grad.addColorStop(.33, "rgba(0,255,255, .15")
    grad.addColorStop(1, "rgba(255,0,0, .15")
    
    
    ctx.fillStyle = grad
    ctx.fill()
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
