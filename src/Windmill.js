import React from 'react'
import { Bodies, Body, Engine, World, Constraint, Runner, Events } from "matter-js"
import Vanes from './images/Vanes'
import Grass from "./images/Grass"

class Windmill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vanes: {},
            honeyMill: {},
            clouds: []
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
    }
    cycle = () => {
        this.updateCycle()
        this.loop = requestAnimationFrame(() => this.cycle())
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
                if (key.position.x > 3000) {
                    for (let i = this.clouds.length - 1; i >= 0; i--) {
                        if (this.clouds[i].id === key.id) {
                            World.remove(this.world, key)
                            this.clouds.splice(i, 1)
                        }
                    }
                }
            })
        }
        this.setState((prevState) => {
            let vanes = Object.assign({}, prevState.vanes)
            let honeyMill = Object.assign({}, prevState.honeyMill)
            let clouds = Object.assign({}, prevState.clouds)
            clouds = this.clouds
            vanes = this.vanes
            honeyMill = this.honeyMill
            return { vanes, honeyMill, clouds }
        })
    }

    componentWillUnmount = () => {
        cancelAnimationFrame(this.loop)
    }

    render() {
        return (
            <svg
                className={this.props.className}
                width="100%"
                viewBox="-250 -500 500 1000"
                preserveAspectRatio="xMidYMid meet"
            >
                
                <path d="M -2000 400 L -1600 -300 L -1200 300 L -800 -400 L -400 400Z" fill="grey" />
                <path d="M -2000 400 L -600 0 Q -200 -100, 400 0 T 1400 -100 T 2200 400 T 2800 400 Z" fill="lightseagreen" />

                {this.state.clouds.map(key =>
                    <path 
                    key={key.id}
                    d={`
                    M ${key.position.x - 50} ${key.position.y + 50} 
                    H ${key.position.x + 50} 
                    Q ${key.position.x + 30} ${key.position.y},
                    ${key.position.x} ${key.position.y + 25},
                    Q ${key.position.x - 15} ${key.position.y},
                    ${key.position.x - 30} ${key.position.y + 25}

                    Z`} fill="white"></path>)}
                <path d="M -400 400 V 250 L -375 300 H -225 L -200 250 V 400 Z " fill="white" strokeWidth="5" />

                <circle cx="-250" cy="325" r="8" fill="#55cdfc" />
                <circle cx="-350" cy="325" r="8" fill="#55cdfc" />
                <rect width="200" height="25" x="-400" y="375" fill="#141B41" />
                <path d="M 300 -200, L 350 400 H 250 Z" fill="#306BAC" />
                <path d="M 450 100, L 475 400 H 425 Z" fill="#306BAC" />

                <Grass
                    x={-2050}
                    y={400}
                    width={2000}
                    height={500}
                    ratio={1}
                    color={"darkcyan"} />
                <Vanes
                    onClick={() => Body.applyForce(this.vanes, { x: 15, y: 50 }, { x: -0.0005, y: 0 })}
                    x={this.vanes.position.x}
                    y={this.vanes.position.y}
                    ratio={0.6}
                    angle={this.vanes.angle}
                ></Vanes>
                <Vanes
                    onClick={() => Body.applyForce(this.honeyMill, { x: 15, y: -50 }, { x: 0.001, y: 0 })}
                    x={this.honeyMill.position.x}
                    y={this.honeyMill.position.y}
                    angle={this.honeyMill.angle}
                    ratio={2}
                ></Vanes>



            </svg>
        )
    }
}




export default Windmill
