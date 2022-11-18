export function setObservable(
  ifObserved?: () => void,
  ifNotObserved?: () => void,
  options?: IntersectionObserverInit
) {
  switch (typeof IntersectionObserver === 'undefined') {
    case false: {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) ifObserved && ifObserved()
        else ifNotObserved && ifNotObserved()
      }, options)
      return observer
    }
    default: {
      ifNotObserved && ifNotObserved()
      return null
    }
  }
}
