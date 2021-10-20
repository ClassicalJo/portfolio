import { useRef } from 'react'
import Loader from './Loader'

export default function Container({ children }) {
    let ref = useRef()
    return (
        <div ref={ref} className="container">
            <Loader element={ref} />
        </div>
    )
}
