import { useState, useEffect, useRef } from "react";
import Slide from "../common/Slide";
import useOnScreen from "../common/useOnScreen";
import Wrapper from "../common/Wrapper";

export default function Home() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    useEffect(() => {
        if (!shown && isVisible) {
            setShown(true)
        }
    }, [shown, isVisible])
    return (
        <Slide>
            <div ref={ref} className={!shown && !isVisible ? "transparent" : 'home'}>
                <Wrapper>
                    <p className='title'>
                        hi
                    </p>
                    <p className='subtitle'>
                        i'm Joe.
                    </p>
                </Wrapper>
            </div>
        </Slide >
    )
}
