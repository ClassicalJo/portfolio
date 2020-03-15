import React from 'react'
import { Runner, Engine, Body, World, Events } from "matter-js"
import Definitions from "./Definitions"
import { anim8 } from "./Bodies"

class NewWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            rotate: 0,
            date: new Date(),
            pause: true,
        }
        this.runner = Runner.create()
        this.engine = Engine.create()
        this.world = this.engine.world
        this.world.gravity.y = 0
        this.timer = 0

        this.bodies = Object.keys(anim8).map(key => anim8[key])
        Events.on(this.engine, 'beforeUpdate', () => this.timer += 1)
        World.add(this.world, this.bodies)
    }

    componentDidMount = () => {
        Body.applyForce(anim8.vane, { x: -0.25, y: 0 }, { x: 0.0025, y: -0.0025 })
        this.timeout = setTimeout(() => this.setState({ pause: false }), 3000)
        Body.rotate(anim8.camera, 0)
        Runner.run(this.runner, this.engine)
        this.cycle()
    }

    componentWillUnmount = () => {
        Runner.stop(this.runner)
        clearTimeout(this.timeout)
        cancelAnimationFrame(this.loop)
    }

    cycle = () => {
        this.updateCycle()
        this.loop = requestAnimationFrame(() => this.cycle())
    }

    updateCycle = () => {
        if (this.timer % 50 === 0) {
            Body.applyForce(anim8.waves, { x: -0.0025, y: 0 }, { x: 0.0025, y: -0.5 })
            Body.applyForce(anim8.sea, { x: -0.0015, y: 0 }, { x: 0.0025, y: -0.5 })
        }
        if (this.timer % 25 === 0) {
            Body.applyForce(anim8.vane, { x: -0.25, y: 0 }, { x: 0.0025, y: -0.0025 })
            if (!this.state.pause) Body.applyForce(anim8.camera, { x: -0.25, y: 0 }, { x: 0.0006, y: -0.0006 })
        }
        this.setState(prevState => {
            let rotate = { ...prevState.rotate }
            let date = { ...prevState.date }
            let sea = { ...prevState.sea }
            let waves = { ...prevState.waves }
            let vane = { ...prevState.vane }

            rotate = -anim8.camera.angle
            date = new Date()
            sea = anim8.sea
            waves = anim8.waves
            vane = anim8.vane

            return { rotate, date, sea, waves, vane }
        })
    }

    togglePause = () => {
        if (!this.state.pause) Body.setAngularVelocity(anim8.camera, 0)
        this.setState(prevState => {
            let pause = { ...prevState.pause }
            pause = (!prevState.pause)
            return { pause }
        })
    }

    render() {
        return (
            <svg
                className="svg"
                width="100%"
                height="100%"
                viewBox="-500 -500 1000 1000"
                // viewBox="-2000 -2000 4000 4000"
                onClick={() => this.togglePause()}
                onTouchStart={() => this.togglePause()}>
                <Definitions date={this.state.date} sea={anim8.sea} waves={anim8.waves} vane={anim8.vane} camera={this.state.rotate} />                
            </svg>
        )
    }
}

export default NewWorld
