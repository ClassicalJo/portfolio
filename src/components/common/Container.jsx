import { useEffect, useRef } from 'react'
import { Context } from './Context'
import animateScroll from './scrollTo'
import Loader from './Loader'

export default function Container() {
    let ref = useRef()
    let scroll = target => animateScroll(ref.current, target)
    useEffect(() => {
        ref.current.click()
    }, [])
    return (
        <Context.Provider value={{ scroll }}>
            <div ref={ref} className="container">
                <Loader element={ref} />
            </div>
        </Context.Provider>
    )
}
