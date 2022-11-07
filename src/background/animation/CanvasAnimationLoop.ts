import type { AnimationOptions, AnimationOptionsUI, CanvasAnimation } from './types'
import { easeOutBack } from './utils'

const defaultOptions: AnimationOptions = {
  duration: 1000,
  color: 3
}

export class CanvasAnimationLoop {
  fps: number
  frameDuration: number
  time: number
  lag: number
  animationFrame: number
  progress: number
  options: AnimationOptions
  private _pause: boolean
  constructor(
    public canvas?: HTMLCanvasElement,
    public animation?: CanvasAnimation,
    options?: AnimationOptionsUI
  ) {
    this.fps = 60
    this.frameDuration = 1000 / this.fps
    this.options = { ...defaultOptions, ...options }
    this.time = performance.now()
    this.lag = 0
    this.animationFrame = 0
    this._pause = false
    this.progress = 0
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas
  }
  setAnimation(animation: CanvasAnimation) {
    this.animation = animation
  }

  loop() {
    if (!this.canvas || !this.animation) return
    this.animationFrame = requestAnimationFrame(() => this.loop())
    //Calculate the time that has elapsed since the last frame
    const CURRENT = performance.now()
    const ELAPSED = CURRENT - this.time
    //Add the elapsed time to the lag counter
    this.lag += ELAPSED

    //Update the frame if the lag counter is greater than or equal to the frame duration
    while (this.lag >= this.frameDuration) {
      //If animation is not paused update the logic

      if (this.progress < 1) this.progress += 1 / this.options.duration
      !this._pause &&
        this.animation.update(easeOutBack(this.progress), this.options.color)

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

  play(options: AnimationOptionsUI) {
    this.options = { ...this.options, ...options }
    this.time = performance.now()
    this.pause = false
    this.loop()
  }
  stop() {
    this.progress = 0
    cancelAnimationFrame(this.animationFrame)
  }
}
