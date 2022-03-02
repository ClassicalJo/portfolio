import { useRef, useLayoutEffect, useContext } from 'react'
import { Context } from '../common/Context.jsx'
import { switcher } from './switch/index.js'
export default function Switch({ width, height }) {
    let ref = useRef()
    let { language } = useContext(Context)
    useLayoutEffect(() => {
        let canvas = ref.current
        let toggler = switcher(canvas, language.current, {
            onEnd: language.toggle
        })
        let changeLanguage = () => !toggler.isAnimating() && toggler.toggle()
        canvas.addEventListener('click', changeLanguage)
        return () => canvas.removeEventListener('click', changeLanguage)
    }, [language])

    return (
        <canvas
            style={{ width, height }}
            {...{ ref, width, height }}
        />
    )
}
