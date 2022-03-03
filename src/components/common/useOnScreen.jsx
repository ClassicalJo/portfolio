//https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
import { useEffect, useMemo, useState } from 'react'

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)
    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: .1 }
    ), [])
    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [observer, ref])
    return isIntersecting
}
