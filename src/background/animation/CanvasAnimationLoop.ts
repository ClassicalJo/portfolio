import type { CanvasAnimation } from './types'
export class CanvasAnimationLoop {
  canvas: HTMLCanvasElement
  animation: CanvasAnimation
  fps: number
  frameDuration: number
  time: number
  lag: number
  animationFrame: number
  private _pause: boolean
  constructor(canvas: HTMLCanvasElement, animation: CanvasAnimation) {
    this.canvas = canvas
    this.animation = animation
    this.fps = 60
    this.frameDuration = 1000 / this.fps
    this.time = Date.now()
    this.lag = 0
    this.animationFrame = 0
    this._pause = false
  }

  loop() {
    this.animationFrame = requestAnimationFrame(() => this.loop())
    //Calculate the time that has elapsed since the last frame
    const CURRENT = Date.now()
    const ELAPSED = CURRENT - this.time
    //Add the elapsed time to the lag counter
    this.lag += ELAPSED

    //Update the frame if the lag counter is greater than or equal to the frame duration
    while (this.lag >= this.frameDuration) {
      //If animation is not paused update the logic
      !this._pause && this.animation.update()
      //Reduce the lag counter by the frame duration
      this.lag -= this.frameDuration
    }
    //Calculate the lag offset and use it to render the sprites
    const lagOffset = this.lag / this.frameDuration
    this.animation.render(lagOffset)
  }

  set pause(bool: boolean) {
    this._pause = bool
  }
  get pause() {
    return this._pause
  }

  play() {
    this.pause = false
    this.loop()
  }
  stop() {
    cancelAnimationFrame(this.animationFrame)
  }
}
