import { writable } from 'svelte/store'

function createSlideIndex() {
  const colors = [5, 1, 3]
  const { subscribe, set } = writable(colors[0])

  return {
    subscribe,
    updateColor: (int: number) => set(colors[int % 3])
  }
}
export const slideIndex = createSlideIndex()
