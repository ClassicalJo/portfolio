import type { AnimationOptions, AnimationOptionsUI, CanvasAnimation } from './types'
import { easeOutBack } from './utils'

export class Looper {
  frameDuration: number
  
  now: number
  then: number
  constructor(public fps: number) {
    this.frameDuration = 1000 / fps
    this.then = window.performance.now()    
    this.now = 0
  }
  update(t: number): boolean {
    this.now = t
    const elapsed = this.now - this.then    
    // console.log(elapsed)
    if (elapsed > this.frameDuration) {
      this.then = this.now - (elapsed % this.frameDuration)
      return true
    }
    return false
  }
}

export class CanvasAnimationLoop {  
  looper: Looper
  animationFrame: number
  private _pause: boolean
  constructor(public canvas?: HTMLCanvasElement, public animation?: CanvasAnimation) {
    this.looper = new Looper(35)    
    this.animationFrame = 0
    this._pause = false
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas
  }
  setAnimation(animation: CanvasAnimation) {
    this.animation = animation
  }

  loop(t:number) {
    if (!this.canvas || !this.animation) return this.stop()
    else this.animationFrame = requestAnimationFrame((x:number) => this.loop(x))    
    let shouldUpdate = this.looper.update(t)        
    if (shouldUpdate){
      this.animation.update(1)
      this.animation.render(t)
    }

  }

  set pause(bool: boolean) {
    this._pause = bool
  }

  get pause() {
    return this._pause
  }

  play() {    
    this.pause = false
    this.loop(0)
  }
  stop() {
    cancelAnimationFrame(this.animationFrame)
  }
}
