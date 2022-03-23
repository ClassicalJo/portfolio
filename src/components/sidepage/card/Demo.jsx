import { useRef, useEffect } from 'react'

export default function Demo({ expand, webm }) {
    let ref = useRef()
    useEffect(() => {
        let video = ref.current
        if (expand) video.play()
        else video.pause()
    }, [expand])
    return (
        <div className="demo-wrapper">
            <video ref={ref} src={webm} loop muted autoPlay={true} />
        </div>
    )
}
