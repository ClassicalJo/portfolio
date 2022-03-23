import { useRef, useState } from 'react'
import { Context } from './Context'
import Loader from './Loader'
import useLanguage from './useLanguage'
import videos from './importVideos'


export default function Container() {
    let ref = useRef()
    let language = useLanguage()
    let [showSidepage, setShowSidepage] = useState(false)
    let toggle = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
        setShowSidepage(!showSidepage)
    }
    let scroll = () => window.scroll({ top: ref.current.scrollHeight, behavior: "smooth" })
    return (
        <Context.Provider value={{ scroll, language, videos, sidepage: { toggle, showSidepage } }}>
            <div ref={ref} className="container">
                <Loader element={ref} />
            </div>
        </Context.Provider>
    )
}
