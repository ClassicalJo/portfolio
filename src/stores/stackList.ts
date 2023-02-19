import { derived, get, writable } from 'svelte/store'

export class StackItem<T> {
  constructor(public item: T, public id: number) {}
}

export function createStackList<T>(slides: T[]) {
  if (slides.length < 1) throw new Error('A stack should have at least one item')
  let stackItems = slides.map((slide, index) => new StackItem(slide, index))
  const currentIndex = writable<number>(0)
  const animate = writable<'right' | 'left' | null>(null)

  const stack = derived(currentIndex, $currentIndex => {
    const item = stackItems.find(
      stackItem => stackItem.id === $currentIndex
    ) as StackItem<T>
    const filteredStack = stackItems.filter(stackItem => stackItem !== item)
    stackItems = [...filteredStack, item]
    return stackItems
  })

  function setIndex(index: number) {
    currentIndex.set(index)
  }

  function setItem(index: number) {
    animate.set('right')
    setIndex(index)
  }

  function next() {
    animate.set('right')
    const index = (get(currentIndex) + 1) % slides.length
    setIndex(index)
  }
  function previous() {
    animate.set('left')
    const targetId = get(currentIndex) - 1
    const index = targetId < 0 ? slides.length - 1 : targetId
    setIndex(index)
  }

  return {
    stack,
    currentIndex,
    animate,
    setItem,
    next,
    previous
  }
}
