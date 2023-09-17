export class Scroller {
  targets: Targets
  constructor() {
    this.targets = {
      home: new Section('home', 'Home'),
      about: new Section('about', 'About'),
      projects: new Section('projects', 'Projects'),
      contact: new Section('contact', 'Contact')
    }
  }
  setTarget(section: SectionName, int: number) {
    this.targets[section].target = int
  }
  go(section: SectionName) {
    const top = this.targets[section].target
    window.scroll({
      top: (top ?? 0) - 64,
      behavior: 'smooth'
    })
  }
  getSections() {
    return Object.values(this.targets)
  }
}

export const scrollerKey = Symbol()

export class Section {
  constructor(
    public sectionName: SectionName,
    public title: string,
    public _target: number = 0
  ) {}
  set target(value: number) {
    this._target = value
  }
  get target() {
    return this._target
  }
}

export type Targets = Record<SectionName, Section>

export type SectionName = 'home' | 'about' | 'projects' | 'contact'

export type ScrollTarget = Partial<Record<SectionName, number>>
