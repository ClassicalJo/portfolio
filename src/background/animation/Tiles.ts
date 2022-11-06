import type { CanvasAnimation, TilesUniforms, Vector } from './types'
import { createProgram, createShader } from './utils'
import { fragment } from './fragment'
import { vertex } from './vertex'

export class Tiles implements CanvasAnimation {
  tiles: Vector[]
  tileSize: number
  locations: TilesUniforms
  origin: Vector
  color: number
  timestamp: number
  lifetime: number
  constructor(public canvas: HTMLCanvasElement, public gl: WebGLRenderingContext) {
    this.canvas = canvas
    this.tileSize = 20
    this.tiles = this.generateTiles(this.tileSize)
    this.timestamp = 0
    this.color = 0
    this.locations = this.init()
    this.origin = { x: 0, y: 0 }
    this.lifetime = 0
  }

  init(): TilesUniforms {
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height)
    this.gl.clearColor(0, 0, 0, 0)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    const vs = createShader(this.gl, this.gl.VERTEX_SHADER, vertex)
    const fs = createShader(this.gl, this.gl.FRAGMENT_SHADER, fragment)
    if (!vs || !fs) throw new Error('Error creating shaders')
    const program = createProgram(this.gl, vs, fs)
    if (!program) throw new Error('Error creating program')

    // look up where the vertex data needs to go.
    const positionAttributeLocation = this.gl.getAttribLocation(program, 'a_position')
    // look up uniform locations
    const resolutionUniformLocation = this.gl.getUniformLocation(program, 'u_resolution')
    const timeUniformLocation = this.gl.getUniformLocation(program, 'u_time')
    const progressUniformLocation = this.gl.getUniformLocation(program, "u_progress")
    const translationUniformLocation = this.gl.getUniformLocation(
      program,
      'u_translation'
    )
    // Create a buffer to put three 2d clip space points in
    const positionBuffer = this.gl.createBuffer()

    this.gl.useProgram(program)
    // Turn on the attribute
    this.gl.enableVertexAttribArray(positionAttributeLocation)

    // Bind the position buffer.
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    const size = 2 // 2 components per iteration
    const type = this.gl.FLOAT // the data is 32bit floats
    const normalize = false // don't normalize the data
    const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0 // start at the beginning of the buffer
    this.gl.vertexAttribPointer(
      positionAttributeLocation,
      size,
      type,
      normalize,
      stride,
      offset
    )

    // set the resolution
    this.gl.uniform2f(
      resolutionUniformLocation,
      this.gl.canvas.width,
      this.gl.canvas.height
    )
    this.setRectangle(this.gl, this.tileSize)
    return {
      positionAttributeLocation,
      resolutionUniformLocation,
      translationUniformLocation,
      timeUniformLocation,
      progressUniformLocation
    }
  }
  generateTiles(tileSize: number): Vector[] {
    const array = []
    for (let x = 0; x < this.canvas.width; x += tileSize) {
      for (let y = 0; y < this.canvas.height; y += tileSize) {
        array.push({ x, y })
      }
    }
    return array
  }
  setRectangle(gl: WebGLRenderingContext, tileSize: number) {
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        0,
        0,
        0,
        tileSize,
        tileSize,
        0,
        tileSize,
        0,
        tileSize,
        tileSize,
        0,
        tileSize
      ]),
      gl.STATIC_DRAW
    )
  }

  render() {
    this.lifetime++
    //Add rendering here
    this.tiles.forEach((tile: Vector) => {
      // Set translation
      this.gl.uniform2f(this.locations.translationUniformLocation, tile.x, tile.y)
      // Pass the color int
      this.gl.uniform1f(this.locations.progressUniformLocation, this.color)
      // Pass the lifetime int
      this.gl.uniform1f(this.locations.timeUniformLocation, this.lifetime)
      // Draw the rectangle.
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6)
    })
  }

  update(int: number, color: number) {

    this.color = color - (1 - int)
  }
}
export default Tiles
