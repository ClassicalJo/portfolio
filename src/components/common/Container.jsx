import { useRef } from 'react'
import { Context } from './Context'
import Loader from './Loader'
import useLanguage from './useLanguage'
import videos from './importVideos'

export default function Container() {
    let ref = useRef()
    let language = useLanguage()
    
    let scroll = () => window.scroll({ top: ref.current.scrollHeight, behavior: "smooth" })
    return (
        <Context.Provider value={{ scroll, language, videos }}>
            <div ref={ref} className="container">
                <Loader element={ref} />
            </div>
        </Context.Provider>
    )
}
