import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../common/Context";
import Slide from "../common/Slide";
import useOnScreen from "../common/useOnScreen";
import Wrapper from "../common/Wrapper";
import text from './text.json'

export default function Home() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    let { current } = useContext(Context).language
    let { title, subtitle } = text
    useEffect(() => {
        if (!shown && isVisible) {
            setShown(true)
        }
    }, [shown, isVisible])
    return (
        <Slide>
            <div ref={ref} className={!shown && !isVisible ? "transparent" : 'home'}>
                <Wrapper>
                    <p className={`${current} title`}>
                        {title[current]}
                    </p>
                    <p className={`${current} subtitle`}>
                        {subtitle[current]}
                    </p>
                </Wrapper>
            </div>
        </Slide >
    )
}
