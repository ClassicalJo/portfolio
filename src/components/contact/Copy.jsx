import { useEffect, useRef } from "react"

export default function Copy({ onClick, children }) {
    let ref = useRef()
    useEffect(() => {
        ref.current.focus()
    }, []) 
    return (
        <div ref={ref} className='copy' onClick={onClick} tabIndex={0} onKeyDown={e=> e.key === 'Enter' && onClick()}>
            {children}
        </div>
    )
}
