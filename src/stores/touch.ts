import { writable, get } from 'svelte/store'

type Vector = { x: number; y: number }

export function createTouchStore(threshold: number) {
  const touch = writable<null | Vector>(null)

  function touchStart(evt: TouchEvent & { currentTarget: HTMLElement }) {
    const { clientX, clientY } = evt.touches[0]
    touch.set({ x: clientX, y: clientY })
  }

  function touchMove(
    evt: TouchEvent & { currentTarget: HTMLElement },
    leftCallback: () => void,
    rightCallback: () => void
  ) {
    const isTouching = get(touch)
    if (!isTouching) return

    const { clientX } = evt.touches[0]
    const distance = clientX - isTouching.x
    const { width } = evt.currentTarget.getBoundingClientRect()

    const isOverThreshold = Math.abs(distance) > width * threshold
    if (!isOverThreshold) return

    distance > 0 ? leftCallback() : rightCallback()
    touch.set(null)
  }
  function touchEnd() {
    touch.set(null)
  }
  return { touch, touchStart, touchEnd, touchMove }
}
