export class Scroller {
  targets: ScrollTarget
  constructor() {
    this.targets = {}
  }
  setTarget(section: ScrollTargetKey, int: number) {
    this.targets[section] = int
  }
  go(section: ScrollTargetKey) {
    const top = this.targets[section]
    if (top === undefined) return
    window.scroll({
      top: top - 64,
      behavior: 'smooth'
    })
  }
}
export const key = Symbol()
export type ScrollTarget = {
  home?: number
  about?: number
  projects?: number
  contact?: number
}

export type ScrollTargetKey = keyof ScrollTarget
