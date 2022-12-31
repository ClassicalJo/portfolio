export interface CanvasAnimation {
  update: (t:number) => void
  render: (t:number) => void
}

export type Vector = { x: number; y: number }

export type Uniform = WebGLUniformLocation | null
export interface TilesUniforms {
  positionAttributeLocation: number
  primaryColorUniformLocation: Uniform
  resolutionUniformLocation: Uniform
  translationUniformLocation: Uniform
  timeUniformLocation: Uniform
}

export interface AnimationOptions {
  duration: number
  color: number
}
export interface AnimationOptionsUI {
  duration?: number
  color?: number
}
