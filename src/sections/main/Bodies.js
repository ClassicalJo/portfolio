import { Bodies, Constraint } from "matter-js"
let sea = Bodies.circle(0, 0, 5, { isSensor: true })
let hook = Bodies.circle(0, 0, 0, { isStatic: true, isSensor: true })
let waves = Bodies.circle(0, 0, 5, { isSensor: true })

let vane = Bodies.rectangle(50, 50, 50, 50, { isSensor: true })
let bolt = Bodies.circle(50, 50, 0, { isStatic: true, isSensor: true })

let camera = Bodies.circle(0, 0, 5, { isSensor: true })
let tripod = Bodies.circle(0, 0, 0, { isStatic: true, isSensor: true })


export const anim8 = {
    sea: sea,
    hook: hook,
    waves: waves,
    seaLine: Constraint.create({ bodyA: sea, bodyB: hook, }),
    waveLine: Constraint.create({ bodyA: waves, bodyB: hook }),
    vane: vane,
    bolt: bolt,
    vaneLine: Constraint.create({ bodyA: vane, bodyB: bolt }),
    camera: camera,
    tripod: tripod,
    cameraLine: Constraint.create({ bodyA: camera, bodyB: tripod })
}
