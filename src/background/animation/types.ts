export interface CanvasAnimation {
  update: (int: number, color: number) => void
  render: (lagOffset: number) => void
}

export type Vector = { x: number; y: number }

export type Uniform = WebGLUniformLocation | null
export interface TilesUniforms {
  positionAttributeLocation: number
  resolutionUniformLocation: Uniform
  translationUniformLocation: Uniform
  timeUniformLocation: Uniform
  progressUniformLocation: Uniform
}

export interface AnimationOptions {
  duration: number
  color: number
}
export interface AnimationOptionsUI {
  duration?: number
  color?: number
}
