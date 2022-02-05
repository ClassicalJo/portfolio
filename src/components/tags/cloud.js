import { Tag } from "./tag.js"

export class Cloud {
    constructor(width, height, tags) {
        this.width = width
        this.height = height
        this.tags = tags
        this.bodies = []
        this.nobodies = []
        this.fontSize = 22
        this.marginSize = 20
        this.makeTags(this.tags)
        this.setTags()
    }
    pushBody(k, n) {
        this.bodies.push(new Tag(k, this.height, n))
    }
    makeTags(arr, acc = 0) {
        if (arr instanceof Array) return arr.forEach(k => this.pushBody(k, 1))
        Object.keys(arr).forEach(k => {
            this.pushBody(k, 3 - acc)
            this.makeTags(arr[k], acc + 1)
        })
    }
    setTags() {
        let total = 0
        let { marginSize, fontSize } = this
        for (let i = 0; i < this.bodies.length; i++) {
            if (total < this.height * 2) {
                this.bodies[i].setPosition(0, this.height - total)
                total += this.bodies[i].size * marginSize + fontSize + this.bodies[i + 1].size * marginSize
            }
            else return this.nobodies = this.bodies.splice(i)
        }
    }
    render(ctx) {
        this.bodies.forEach(k => k.render(ctx))
    }
    update() {
        let uppermost = this.bodies[this.bodies.length - 1]
        let lowermost = this.nobodies[0]
        let { fontSize, marginSize } = this
        if (this.height + uppermost.pos.y > fontSize + uppermost.size * marginSize + lowermost.size * marginSize) {
            let tag = this.nobodies.shift()
            tag.setPosition(0, -this.height)
            this.bodies.push(tag)
        }
        this.bodies.forEach((k, i) => {
            let hide = k.update()
            if (hide) {
                let body = this.bodies.splice(i, 1)
                this.nobodies.push(body[0])
            }
        })
    }
}
