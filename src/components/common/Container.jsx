import { useEffect, useState, useRef } from 'react'
import { Context } from './Context'
import Loader from './Loader'

export default function Container() {
    let ref = useRef()
    let scroll = () => ref.current.scroll({ top: ref.current.scrollHeight, behavior: "smooth" })

    useEffect(() => {
        ref.current.click()
    }, [])
    return (
        <Context.Provider value={{ scroll, }}>
            <div ref={ref} className="container">
                <Loader element={ref} />
            </div>
        </Context.Provider>
    )
}
