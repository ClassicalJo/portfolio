import { writable } from 'svelte/store'
import type { ScrollTargetKey } from './Scroller'

function createSlideIndex() {
  const colors = [5, 1, 3]
  const { subscribe, set } = writable(colors[0])

  return {
    subscribe,
    updateColor: (int: number) => set(colors[int % 3])
  }
}

export const slideIndex = createSlideIndex()

export const visibleHero = writable(true)
export const currentSection = writable<ScrollTargetKey>('home')

function createScrollDownListener() {
  const { subscribe, set } = writable<boolean>(false)
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

export function  createCarouselStore(slidesMaxIndex:number){
  const {subscribe, update, set} =  writable<number>(0)
  const next = () => update((state:number) => (state + 1) % (slidesMaxIndex + 1))
  const previous = () => update((state:number) => (state - 1) < 0 ? slidesMaxIndex : state - 1)
  const setSlide = (int: number) => set(int)
  
  return {
    subscribe,
    next,
    previous,
    setSlide
  }
}