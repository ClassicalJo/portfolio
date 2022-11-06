import { CanvasAnimationLoop } from './CanvasAnimationLoop'
import Tiles from './Tiles'

export default function mountCanvas() {
  const animation = new CanvasAnimationLoop()
  function start(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('experimental-webgl')
    if (!gl || !(gl instanceof WebGLRenderingContext))
      return console.log('WebGL2 context not supported')
    const tiles = new Tiles(canvas, gl)
    animation.setCanvas(canvas)
    animation.setAnimation(tiles)
  }
  return { animation, start }
}
