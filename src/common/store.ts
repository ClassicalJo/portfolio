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
