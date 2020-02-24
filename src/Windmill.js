import React from 'react'
import { Bodies, Body, Engine, World, Constraint, Runner, Events } from "matter-js"
import Vanes from './images/svg/Vanes'
import Grass from "./images/svg/Grass"
import Cloud from './images/svg/Cloud'
import { Mountains, Mounts, Lobo, Luna, Chain, Clock, Tower } from "./images/svg/HomeSVG"

class Windmill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vanes: {},
            honeyMill: {},
            clouds: [],
            viewBox: {
                //x: -250,
                x: 3000,
                y: -500,
                width: 500,
                height: 1000,
                dragging: false,
                origin: { x: 0, y: 0 },
                mouse: { x: 0, y: 0 }
            }
        }

        this.runner = Runner.create()
        this.engine = Engine.create()
        this.world = this.engine.world
        this.world.gravity.y = 0
        this.timer = 0

        this.vanes = Bodies.rectangle(300, -200, 25, 25, { friction: 0 })
        this.hook = Bodies.circle(300, -200, 0, { isStatic: true, isSensor: true })
        this.constraint = Constraint.create({ bodyA: this.vanes, bodyB: this.hook })

        this.honeyMill = Bodies.rectangle(450, 100, 25, 25, { friction: 0 })
        this.honeyHook = Bodies.circle(450, 100, 0, { isStatic: true, isSensor: true })
        this.honeyConstraint = Constraint.create({ bodyA: this.honeyMill, bodyB: this.honeyHook })

        this.smallMill = Bodies.rectangle(-300, 200, 25, 25, { friction: 0 })
        this.smallHook = Bodies.circle(-300, 200, 0, { isStatic: true, isSensor: true })
        this.smallConstraint = Constraint.create({ bodyA: this.smallMill, bodyB: this.smallHook })

        this.viewBox = {
            x: -250,
            y: -500,
            width: 500,
            height: 1000,
            dragging: false,
            origin: { x: 0, y: 0 },
            mouse: { x: 0, y: 0 },
        }
        this.clouds = []

        World.add(this.world, [this.vanes, this.hook, this.constraint, this.honeyMill, this.honeyHook, this.honeyConstraint])
        Events.on(this.engine, 'beforeUpdate', () => this.timer += 1)

    }

    componentDidMount = () => {
        Runner.run(this.runner, this.engine)
        this.cycle()
        this.generateCloud(Math.random() * -800, -200)
        this.generateCloud(Math.random() * -1000, -200)
        this.generateCloud(-150, -300)
        this.generateCloud(Math.random() * 1000, -300)

        document.querySelector(".svg").addEventListener("mousedown", this.startDrag)
        document.querySelector(".svg").addEventListener("mousemove", this.drag)
        document.querySelector(".svg").addEventListener("mouseleave", this.endDrag)
        document.querySelector(".svg").addEventListener("mouseup", this.endDrag)

        document.querySelector(".svg").addEventListener("touchstart", this.startDrag, { passive: true })
        document.querySelector(".svg").addEventListener("touchmove", this.drag, { passive: true })
        document.querySelector(".svg").removeEventListener("touchleave", this.endDrag)
        document.querySelector(".svg").addEventListener("touchend", this.endDrag, { passive: true })

    }

    cycle = () => {
        this.updateCycle()
        this.loop = requestAnimationFrame(() => this.cycle())
    }

    startDrag = (e) => {
        this.viewBox.dragging = true
        if (e.type === "mousedown") this.viewBox.origin = { x: Number(e.clientX), y: Number(e.clientY) }
        else if (e.type === "touchstart") this.viewBox.origin = { x: Number(e.touches[0].clientX), y: Number(e.touches[0].clientY) }

    }

    drag = (e) => {
        if (this.viewBox.dragging) {
            if (e.type === "mousemove") this.viewBox.mouse = { x: e.clientX, y: e.clientY }
            else if (e.type === "touchmove") this.viewBox.mouse = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        }
    }

    endDrag = () => {
        this.viewBox.dragging = false
    }

    generateCloud = (x, y) => {
        this.cloud = Bodies.circle(x - Math.random() * 500, y - Math.random() * 100, 50, { isSensor: true })
        this.clouds.push(this.cloud)
        World.add(this.world, this.cloud)
        Body.setVelocity(this.cloud, { x: 1, y: 0 })
    }
    updateCycle = () => {
        if (this.timer % 2 === 0) {
            Body.applyForce(this.vanes, { x: 15, y: -50 }, { x: -0.0000025, y: 0 })
            Body.applyForce(this.honeyMill, { x: 15, y: -50 }, { x: 0.0000025, y: 0 })
            this.state.clouds.forEach(key => Body.setVelocity(key, { x: 1, y: 0 }))
        }

        if (this.timer % 1000 === 0) {
            this.generateCloud(-1500, -200)
            this.clouds.forEach(key => {
                if (key.position.x > 1500) {
                    for (let i = this.clouds.length - 1; i >= 0; i--) {
                        if (this.clouds[i].id === key.id) {
                            World.remove(this.world, key)
                            this.clouds.splice(i, 1)
                        }
                    }
                }
            })
        }

        if (this.viewBox.dragging) {
            let ratio = Math.abs(this.viewBox.origin.x - this.viewBox.mouse.x) / 25
            this.viewBox.origin.x < this.viewBox.mouse.x ? this.viewBox.x += ratio : this.viewBox.x -= ratio
            if (this.viewBox.x > 4000) this.viewBox.x = -4000
            if (this.viewBox.x < -4000) this.viewBox.x = 4000
        }

        this.setState((prevState) => {
            let vanes = { ...prevState.vanes }
            let honeyMill = { ...prevState.honeyMill }
            let clouds = { ...prevState.clouds }
            let viewBox = { ...prevState.viewBox }
            viewBox = this.viewBox
            clouds = this.clouds
            vanes = this.vanes
            honeyMill = this.honeyMill
            return { vanes, honeyMill, clouds, viewBox }
        })
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.loop)
        document.querySelector(".svg").removeEventListener("mousedown", this.startDrag)
        document.querySelector(".svg").removeEventListener("mousemove", this.drag)
        document.querySelector(".svg").removeEventListener("mouseleave", this.endDrag)
        document.querySelector(".svg").removeEventListener("mouseup", this.endDrag)

        document.querySelector(".svg").removeEventListener("touchstart", this.startDrag, { passive: true })
        document.querySelector(".svg").removeEventListener("touchmove", this.drag, { passive: true })
        document.querySelector(".svg").removeEventListener("touchleave", this.endDrag)
        document.querySelector(".svg").removeEventListener("touchend", this.endDrag, { passive: true })
    }

    render() {
        return (
            <svg
                className="svg"
                width="100%"
                viewBox={this.state.viewBox.x + " " + this.state.viewBox.y + " " + this.state.viewBox.width + " " + this.state.viewBox.height}
                preserveAspectRatio="xMidYMid meet"
            >
                <Mountains />
                <Mounts />
                {this.state.clouds.map(key => <Cloud viewBox={this.state.viewBox} position={key.position} key={key.id} />)}
                <Lobo />
                <Luna viewBox={this.state.viewBox.x} cx={-2225} cy={100} id="luna1" />
                <Luna viewBox={this.state.viewBox.x} cx={5775} cy={100} id="luna2" />
                <Chain viewBox={this.state.viewBox.x} x={2700} y={400} />
                <Chain viewBox={this.state.viewBox.x} x={-5300} y={400} />
                <Clock viewBox={this.state.viewBox.x} cx={4750} cy={0} />
                <Clock viewBox={this.state.viewBox.x} cx={-3250} cy={0} />
                <Tower viewBox={this.state.viewBox.x} x={3500} id="tower1" />
                <Tower viewBox={this.state.viewBox.x} x={-4500} id="tower2" />

                <Vanes
                    onClick={() => Body.applyForce(this.vanes, { x: 15, y: 50 }, { x: -0.0005, y: 0 })}
                    x={this.vanes.position.x}
                    y={this.vanes.position.y}
                    ratio={0.6}
                    angle={this.vanes.angle}
                    viewBox={this.state.viewBox.x}
                />
                <Vanes
                    onClick={() => Body.applyForce(this.honeyMill, { x: 15, y: -50 }, { x: 0.001, y: 0 })}
                    x={this.honeyMill.position.x}
                    y={this.honeyMill.position.y}
                    angle={this.honeyMill.angle}
                    ratio={2}
                    viewBox={this.state.viewBox.x}
                />
                <Grass
                    x={-6000}
                    y={400}
                    width={7000}
                    height={500}
                    ratio={1}
                    color={"darkcyan"} />




            </svg>
        )
    }
}




export default Windmill
