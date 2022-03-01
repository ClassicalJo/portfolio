import { useEffect, useRef } from 'react'
import { Context } from './Context'
import Loader from './Loader'
import useLanguage from './useLanguage'

export default function Container() {
    let ref = useRef()
    let language = useLanguage()
    let scroll = () => ref.current.scroll({ top: ref.current.scrollHeight, behavior: "smooth" })
    return (
        <Context.Provider value={{ scroll, language }}>
            <div ref={ref} className="container">
                <Loader element={ref} />
            </div>
        </Context.Provider>
    )
}
