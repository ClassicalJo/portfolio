import React from "react"
import { Body, Bodies, World, Engine, Runner } from 'matter-js'
import Box from "./images/Box"
import Circle from "./images/Circle"
import Lobo from "./images/Lobo"
import Overlay from './images/Overlay'
import "./assets/css/footer.css"


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
        this.ground = Bodies.rectangle(0, 35, 2000, 5, { friction: 0, isStatic: true, width: 1500, height: 5, color: "white" })
        this.bodies = []
        World.add(this.world, this.ground)
        this.boxes = [this.ground]
    }

    componentDidMount() {
        window.addEventListener("blur", () => { this.togglePause() })
        window.addEventListener("focus", () => { this.togglePause() })
        this.cycle()
        Runner.run(this.runner, this.engine)
        this.setBeltAndBodiesIntervals()
    }

    componentWillUnmount() {
        document.removeEventListener("blur", () => this.togglePause());
        document.removeEventListener("focus", () => this.togglePause())
        clearInterval(this.conveyorBeltInterval)
        clearInterval(this.randomBodiesInterval)
    }

    setBeltAndBodiesIntervals = () => {
        this.randomBodiesInterval = setInterval(() => this.createRandomBody(-400, -10), 2000)
        this.conveyorBeltInterval = setInterval(() => {
            this.bodies.forEach((key) =>
                Body.applyForce(key, { x: key.bounds.min.x, y: key.bounds.min.y }, { x: 0.00005, y: 0 }))

        }, 250)
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
            {this.state.bodies.map((key) => {
                if (key.label === "square") {
                    return <Box
                        key={this.state.bodies.indexOf(key)}
                        x={key.position.x}
                        y={key.position.y}
                        width={key.width}
                        height={key.height}
                        angle={key.angle}
                        color={key.color}>
                    </Box>
                }
                else if (key.label === "rectangle") {
                    return <Box
                        key={this.state.bodies.indexOf(key)}
                        x={key.position.x}
                        y={key.position.y}
                        width={key.width}
                        height={key.height}
                        angle={key.angle}
                        color={key.color}>
                    </Box>
                }
                else if (key.label === "lobo") {
                    return <Lobo
                        key={this.state.bodies.indexOf(key)}
                        x={key.position.x}
                        y={key.position.y}
                        width={key.width}
                        height={key.height}
                        angle={key.angle}
                        color={key.color}>
                    </Lobo>
                }
                else if (key.label === "circle") {
                    return <Circle
                        key={this.state.bodies.indexOf(key)}
                        cx={key.position.x}
                        cy={key.position.y}
                        r={key.radius}
                        color={key.color}>
                    </Circle>
                }
                else {
                    return null
                }
            })}
        </React.Fragment>
    }

    togglePause = () => {
        if (this.state.pause) {
            this.setState({ pause: false })
            this.cycle()
            this.setBeltAndBodiesIntervals()
            Runner.run(this.runner, this.engine)
        } else {
            this.setState({ pause: true })
            clearInterval(this.conveyorBeltInterval)
            clearInterval(this.randomBodiesInterval)
            Runner.stop(this.runner)
            cancelAnimationFrame(this.loop)
        }
    }

    render() {
        return (
            <div className="footer" onClick={() => this.togglePause()} >
                <svg width="100%" height="100%" viewBox="-400 -37.5 800 75" preserveAspectRatio="xMidYMid meet">
                    <Box x={this.ground.position.x} y={this.ground.position.y} width={this.ground.width} height={this.ground.height} angle={this.ground.angle} color={this.ground.color} />
                    {this.renderAllBodies()}
                    <Overlay pause={this.state.pause} />
                </svg>
            </div >)
    }
}
export default Footer
