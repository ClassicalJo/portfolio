import { useRef, useLayoutEffect, useContext } from 'react'
import { Context } from '../common/Context.jsx'
import { switcher } from './switch/index.js'
export default function Switch({ width, height, tabIndex }) {
    let ref = useRef()
    let { language } = useContext(Context)
    useLayoutEffect(() => {
        let canvas = ref.current
        let toggler = switcher(canvas, language.current, {
            onEnd: language.toggle,
            width,
            height
        })
        let changeLanguage = () => !toggler.isAnimating() && toggler.toggle()
        let keyDown = e => e.key === 'Enter' && changeLanguage()
        canvas.addEventListener('click', changeLanguage)
        canvas.addEventListener('keydown', keyDown)
        return () => (
            canvas.removeEventListener('click', changeLanguage) &&
            canvas.removeEventListener('keydown', keyDown)
        )
    }, [language, width, height])

    return (
        <canvas
            className='language'
            tabIndex={1}
            {...{ ref, tabIndex }}
        />
    )
}
