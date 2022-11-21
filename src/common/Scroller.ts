export class Scroller {
  targets: ScrollTarget
  constructor(public container?: HTMLElement) {
    this.targets = {}
  }
  setContainer(element: HTMLElement) {
    this.container = element
  }
  setTarget(section: ScrollTargetKey, int: number) {
    this.targets[section] = int
  }
  go(section: ScrollTargetKey) {
    const target = this.targets[section]
    if (this.container && target !== undefined)
      this.container.scroll({
        top: target - 64,
        behavior: 'smooth'
      })
  }
}
export const key = Symbol()
export type ScrollTarget = {
  hero?: number
  about?: number
  projects?: number
  contact?: number
}

export type ScrollTargetKey = keyof ScrollTarget
