function getPosition(angle, rx, ry) {
    return { x: rx * Math.cos(angle), y: ry * Math.sin(angle) }
}

export function translate(ctx, width, height) {
    ctx.translate(width, height)
}

export function resetTranslation(ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

export function clearRect(ctx, width, height) {
    ctx.clearRect(-width / 2, -height / 2, width, height)
}

export function drawOrbit(ctx, rx, ry) {
    ctx.beginPath()
    ctx.setLineDash([1, 10])
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
    ctx.stroke()
}

export function drawTags(ctx, rx, ry, tags, angle) {
    class Tag {
        constructor(element, x, y, acc, opacity) {
            this.element = element
            this.x = x
            this.y = y
            this.acc = acc
            this.opacity = opacity
        }
    }
    function drawTag(tag) {
        ctx.fillStyle = tag.acc > 1 ? 'black' : 'white'

        let offset = tag.acc > 1 ? 40 : 0
        ctx.font = `${60 - (tag.acc * 20)}px Arial`
        ctx.fillText(tag.element, tag.x, tag.y + offset)
    }

    function drawCircle(x, y, r, fill) {
        ctx.beginPath()
        ctx.fillStyle = fill
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
    }

    function drawPlanet(tag) {
        let { x, y, acc } = tag
        let r = 125 - 60 * acc
        drawCircle(x - 2.5 * (3-acc), y, r, 'red')
        drawCircle(x + 2.5 * (3-acc), y, r, 'cyan')
        drawCircle(x, y, r, 'black')
    }

    let u = []

    function createTagElements(arr, rx, ry, x, y, acc = 0) {
        if (arr instanceof Array) {
            arr.forEach((k, i) => {
                ctx.font = `${60 - (acc * 20)}px Arial`
                let theta = Math.PI * 2 / arr.length * i - angle
                let pos = getPosition(theta, rx, ry)
                let tag = new Tag(k, x + pos.x, y + pos.y, acc, 1)
                u.push(tag)
            })
        }
        else {
            let keys = Object.keys(arr)
            keys.forEach((k, i) => {
                let fontSize = 60 - (acc * 20)
                ctx.font = `${fontSize}px Arial`
                let theta = Math.PI * 2 / keys.length * i + angle
                let pos = getPosition(theta, rx * acc, ry * acc)
                let finalX = pos.x + x
                let finalY = pos.y + y
                let tag = new Tag(k, finalX, finalY, acc, 1)
                u.push(tag)
                createTagElements(arr[k], rx / (3 - acc), ry / (3 - acc), finalX, finalY, acc + 1)
            })
        }
    }

    createTagElements(tags, rx, ry, 0, 0)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    u.forEach(k => drawPlanet(k))
    u.forEach(k => drawTag(k))
}
