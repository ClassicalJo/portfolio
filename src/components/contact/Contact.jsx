import { useState, useRef, useEffect, useContext } from "react";
import Slide from "../common/Slide";
import Button from "./Button";
import Card from "./Card";
import useOnScreen from "../common/useOnScreen";
import text from "./text.json"
import { Context } from "../common/Context";

export default function Contact() {
    let [show, setShow] = useState(false)
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    let { current } = useContext(Context).language
    useEffect(() => {
        if (!shown && isVisible) {
            setShown(true)
        }
    }, [shown, isVisible])
    let toggleCard = () => setShow(!show)
    let exitCard = () => setShow(false)
    return (
        <Slide>
            <div ref={ref} className={!isVisible && !shown ? "transparent" : 'contact'}>
                <Button><a href="cv.pdf"><p>Resume</p></a></Button>
                <Button >
                    <a rel="noopener noreferrer" target="_blank" href="http://classicaljo.github.io/projects">
                        <p>{text.projects[current]}</p>
                    </a>
                </Button>
                <Button onClick={toggleCard}>
                    <p tabIndex={0} onKeyDown={e => e.key === 'Enter' && toggleCard()} >{text.contact[current]}</p>
                </Button>
                {show && <Card copyLang={text.copy[current]} toggle={toggleCard} onKeyDown={e => e.key === 'Escape' && exitCard()} />}
            </div>
        </Slide>
    )
}
