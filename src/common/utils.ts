export function keyDown(fn: (e: KeyboardEvent) => void) {
  return function (e: KeyboardEvent) {
    if (e.key === 'Space' || e.key === 'Enter') {
      fn(e)
    }
  }
}
