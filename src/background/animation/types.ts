export interface CanvasAnimation {
  update: () => void
  render: (lagOffset: number) => void
}
