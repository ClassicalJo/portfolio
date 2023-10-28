import { writable } from 'svelte/store'
import type { SectionName } from './Scroller'

export const sectionKey = Symbol()
export const createCurrentSection = () => writable<SectionName>('home')

function createScrollDownListener() {
  const { subscribe, set } = writable<boolean>(true)
  let lastKnownScrollPosition = 0
  let ticking = false

  function check(scrollPos: number) {
    set(lastKnownScrollPosition - scrollPos < 0)
    lastKnownScrollPosition = scrollPos
  }

  document.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        check(window.scrollY)
        ticking = false
      })
      ticking = true
    }
  })
  return {
    subscribe
  }
}

export const scrollDown = createScrollDownListener()

type ScreenViewport = { width: number; height: number }
function createResizeListener() {
  const { subscribe } = writable<ScreenViewport>({
    width: window.innerWidth,
    height: window.innerHeight
  })
  return { subscribe }
}
export const screenViewport = createResizeListener()
