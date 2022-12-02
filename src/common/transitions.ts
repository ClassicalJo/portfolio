import { cubicOut } from 'svelte/easing'

type TranslationOptions = {
  duration?: number
  easing?: (t: number) => number
}
const defaultTranslationOptions: TranslationOptions = {
  duration: 400,
  easing: cubicOut
}
export function translate(node: Element, options?: TranslationOptions) {
  const { duration, easing } = { ...defaultTranslationOptions, ...options }
  const height = parseFloat(getComputedStyle(node).height)
  return {
    duration: duration || 800,
    easing,
    css: (_: number, u: number) => '' + `position: relative;` + `top: -${u * height}px;`
  }
}

export function horizontalScale(node: Element, options?: TranslationOptions) {
  const { duration, easing } = { ...defaultTranslationOptions, ...options }
  const style = getComputedStyle(node)
  const transform = style.transform === 'none' ? '' : style.transform
  return {
    duration,
    easing,
    css: (t: number) => `
        transform: ${transform} scale(${t}, 1);
        opacity: ${t}
      `
  }
}
