import { useEffect, useRef, useState } from "react";
import Slide from "../common/Slide";
import useOnScreen from "../common/useOnScreen";
import Hexagon from "./Hexagon";

export default function Skills() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    useEffect(() => {
        if (!shown && isVisible) setShown(true)
    }, [isVisible, shown])
    return (
        <Slide>
            <div ref={ref} className={!shown && !isVisible ? "transparent" : 'skills'}>
                <Hexagon ready={shown} />
            </div>

        </Slide>
    )
}
