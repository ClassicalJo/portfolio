import { useRef, useState, useEffect } from "react"
import useOnScreen from "./useOnScreen"

export default function Slide({ children }) {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    useEffect(() => {
        if (!shown && isVisible) setShown(true)
    }, [isVisible, shown])

    let className = !shown && !isVisible ?  "slide transparent" : "slide appear"
    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    )
}
