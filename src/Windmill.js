import React from 'react'
import { Bodies, Body, Engine, World, Constraint, Runner } from "matter-js"
import Vanes from './images/Vanes'

class Windmill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vanes: Bodies.rectangle(0, 0, 25, 25, { friction: 0 }),
            pause: true,
        }

        this.runner = Runner.create()
        this.engine = Engine.create()
        this.world = this.engine.world

        this.ground = Bodies.rectangle(0, 300, 400, 25, { isStatic: true })
        this.hook = Bodies.circle(0, 0, 0, { isStatic: true, isSensor: true })
        this.vanes = Bodies.rectangle(0, 0, 25, 25, { friction: 0 })
        this.constraint = Constraint.create({ bodyA: this.vanes, bodyB: this.hook })

        Body.applyForce(this.vanes, { x: 15, y: -50 }, { x: -0.0001, y: 0 })

        World.add(this.world, [this.vanes, this.ground, this.hook, this.constraint])
        window.addEventListener("blur", () => this.pauseMill())
        window.addEventListener("focus", () => this.unPauseMill())
    }

    componentDidMount = () => {
        this.unPauseMill()
        this.interval = setInterval(() => {
            if (!this.state.pause) {
                Body.applyForce(this.vanes, { x: 15, y: -50 }, { x: -0.00001, y: 0 })
            }
        }, 50)
    }

    cycle = () => {
        this.updateCycle()
        this.loop = requestAnimationFrame(() => this.cycle())
    }

    updateCycle = () => {
        this.setState((prevState) => {
            let vanes = Object.assign({}, prevState.vanes)
            vanes = this.vanes
            return { vanes }
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
        window.removeEventListener("blur", () => this.pauseMill())
        window.removeEventListener("focus", () => this.unPauseMill())
    }


    pauseMill = () => {
        this.setState({ pause: true })
        Runner.stop(this.runner)
        cancelAnimationFrame(this.loop)
    }

    unPauseMill = () => {
        this.setState({ pause: false })
        Runner.run(this.runner, this.engine)
        this.cycle()
    }

    render() {
        return (
            <svg
                className={this.props.className}
                width="100%" height="100%"
                viewBox="-200 -300 400 800"
                preserveAspectRatio="xMidYMid meet"
                onClick={() => Body.applyForce(this.vanes, { x: 15, y: -50 }, { x: -0.001, y: 0 })}>

                <path fill="#306BAC" d="M0 0 L-50 350 H 50 Z" />
                <Vanes
                    x={this.state.vanes.position.x}
                    y={this.state.vanes.position.y}
                    angle={this.vanes.angle}
                ></Vanes>
            </svg>
        )
    }
}




export default Windmill