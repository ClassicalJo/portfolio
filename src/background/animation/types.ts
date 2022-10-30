export interface CanvasAnimation {
  update: () => void
  render: (lagOffset: number) => void
}

export type Vector = { x: number; y: number }

export type Uniform = WebGLUniformLocation | null
export interface TilesUniforms {
  positionAttributeLocation: number
  resolutionUniformLocation: Uniform
  translationUniformLocation: Uniform
  timeUniformLocation: Uniform
}
