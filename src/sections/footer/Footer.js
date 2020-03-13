import React from "react"
import { Body, Bodies, World, Engine, Runner, Events } from 'matter-js'
import Box from "../../images/svg/Box"
import Circle from "../../images/svg/Circle"
import Lobo from "../../images/svg/Lobo"

let bodyRender = {
    square: key => {
        return (
            <Box
                key={key.id}
                x={key.position.x}
                y={key.position.y}
                width={key.width}
                height={key.height}
                angle={key.angle}
                color={key.color}>
            </Box>)
    },
    rectangle: key => {
        return (
            <Box
                key={key.id}
                x={key.position.x}
                y={key.position.y}
                width={key.width}
                height={key.height}
                angle={key.angle}
                color={key.color}>
            </Box>)
    },
    lobo: key => {
        return (
            <Lobo
                key={key.id}
                x={key.position.x}
                y={key.position.y}
                width={key.width}
                height={key.height}
                angle={key.angle}
                color={key.color}>
            </Lobo>)
    },
    circle: key => {
        return (
            <Circle
                key={key.id}
                cx={key.position.x}
                cy={key.position.y}
                r={key.radius}
                color={key.color}>
            </Circle>)
    },

}

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            boxes: [],
            bodies: [],
            colors: ["#306BAC", "#141B41", "#FFFFFF"],
            pause: false,
        }
        this.engine = Engine.create()
        this.runner = Runner.create()
        this.world = this.engine.world
        this.timer = 1
        this.ground = Bodies.rectangle(0, 35, 2000, 5, { friction: 0, isStatic: true, width: 1500, height: 5, color: "white" })
        this.bodies = []
        Events.on(this.engine, "beforeUpdate", () => this.timer++)
        World.add(this.world, this.ground)
        this.boxes = [this.ground]
    }

    componentDidMount() {
        this.cycle()
        Runner.run(this.runner, this.engine)
    }

    createRandomBody = (x, y) => {
        let diceToss = Math.random()
        let body;
        let randomColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
        if (diceToss < 0.25) {
            let random = Math.random() * 2 + 10
            body = Bodies.rectangle(x, y, random, random, { width: random, height: random, friction: 0, color: randomColor })
            body.label = "square"
            Body.applyForce(body, { x: body.bounds.min.x, y: body.bounds.min.y }, { x: 0.0002 * Math.ceil(Math.random() * 5), y: 0 })
            this.bodies.push(body)
        }
        else if (diceToss < 0.5) {
            let randomHeight = Math.random() * 2 + 10
            let randomWidth = Math.random() * 2 + 5
            body = Bodies.rectangle(x, y, randomWidth, randomHeight, { height: randomHeight, width: randomWidth, friction: 0, color: randomColor })
            body.label = "rectangle"
            Body.applyForce(body, { x: body.bounds.min.x, y: body.bounds.min.y }, { x: 0.0002 * Math.ceil(Math.random() * 5), y: 0 })
            this.bodies.push(body)
        }
        else if (diceToss < 0.9) {
            let randomR = Math.random() * 2 + 5
            body = Bodies.circle(x, y, randomR, { radius: randomR, friction: 0, color: randomColor })
            body.label = "circle"
            Body.applyForce(body, { x: body.bounds.min.x, y: body.bounds.min.y }, { x: 0.0002 * Math.ceil(Math.random() * 5), y: 0 })
            this.bodies.push(body)
        }
        else {
            let random = Math.random() * 2 + 10
            body = Bodies.rectangle(x, y, random, random, { width: random, height: random, friction: 0 })
            body.label = "lobo"
            Body.applyForce(body, { x: body.bounds.min.x, y: body.bounds.min.y }, { x: 0.0002 * Math.ceil(Math.random() * 5), y: 0 })
            this.bodies.push(body)
        }
        World.add(this.world, body)
    }

    cycle = () => {
        this.updateCycle()
        this.loop = requestAnimationFrame(() => this.cycle())
    }

    updateCycle = () => {
        if (this.timer % 1000 === 0) this.createRandomBody(-400, -10)
        if (this.timer % 25 === 0) this.bodies.forEach(key => Body.applyForce(key, { x: key.bounds.min.x, y: key.bounds.min.y }, { x: 0.00005, y: 0 }))

        this.bodies.forEach((key) => {
            if (this.isOffScreen(key)) {
                World.remove(this.world, key)
                for (let i = this.bodies.length - 1; i >= 0; i--) {
                    if (this.bodies[i].id === key.id) this.bodies.splice(i, 1)
                }
            }
        })

        this.setState((prevState) => {
            let bodies = Object.assign({}, prevState.bodies)
            bodies = this.bodies
            return { bodies }
        })
    }

    isOffScreen = (body) => {
        return (body.position.y > 100)
    }

    renderAllBodies = () => {
        return <React.Fragment>
            {this.state.bodies.map(key => bodyRender[key.label](key))}
        </React.Fragment>
    }




    render() {
        return (
            <div className="footer">
                <svg width="100%" height="100%" viewBox="-400 -37.5 800 75" preserveAspectRatio="xMidYMax slice">
                    <Box x={this.ground.position.x} y={this.ground.position.y} width={this.ground.width} height={this.ground.height} angle={this.ground.angle} color={this.ground.color} />
                    {this.state.bodies.map(key => bodyRender[key.label](key))}
                </svg>
            </div >)
    }
}
export default Footer
