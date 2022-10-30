import { CanvasAnimationLoop } from './CanvasAnimationLoop'
import Tiles from './Tiles'

export default function mountCanvas(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('experimental-webgl')
  if (!gl || !(gl instanceof WebGLRenderingContext))
    return console.log('WebGL2 context not supported')
  const tiles = new Tiles(canvas, gl)
  const animation = new CanvasAnimationLoop(canvas, tiles)
  animation.play()
}
