import { useState, useRef, useEffect } from "react";
import Slide from "../common/Slide";
import Button from "./Button";
import Card from "./Card";
import useOnScreen from "../common/useOnScreen";

export default function Contact() {
    let [show, setShow] = useState(false)
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    useEffect(() => {
        if (!shown && isVisible) {
            setShown(true)
        }
    }, [shown, isVisible])
    let toggleCard = () => setShow(!show)
    return (
        <Slide>
            <div ref={ref} className={!isVisible && !shown ? "transparent" : 'contact'}>
                <Button><a href="cv.pdf"><p>Resume</p></a></Button>
                <Button >
                    <a rel="noopener noreferrer" target="_blank" href="http://github.com/ClassicalJo/">
                        <p>Projects</p>
                    </a>
                </Button>
                <Button onClick={toggleCard}><p>Contact details</p></Button>
                {show && <Card toggle={toggleCard} />}
            </div>
        </Slide>
    )
}
