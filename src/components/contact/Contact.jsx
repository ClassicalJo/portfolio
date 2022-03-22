import { useState, useContext } from "react";
import Slide from "../common/Slide";
import Button from "./Button";
import Card from "./Card";
import text from "./text.json"
import { Context } from "../common/Context";

export default function Contact() {
    let [show, setShow] = useState(false)
    let { current } = useContext(Context).language
    let toggleCard = () => setShow(!show)
    let exitCard = () => setShow(false)
    return (
        <Slide>
            <div className='contact'>
                <Button><a href={text.cv[current]}><p>Resume</p></a></Button>
                <Button >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://classicaljo.github.io/projects">
                        <p>{text.projects[current]}</p>
                    </a>
                </Button>
                <Button onClick={toggleCard}>
                    <p tabIndex={0} onKeyDown={e => e.key === 'Enter' && toggleCard()} >{text.contact[current]}</p>
                </Button>
                {show && (
                    <Card
                        copyLang={text.copy[current]}
                        toggle={toggleCard}
                        onKeyDown={e => e.key === 'Escape' && exitCard()}
                    />
                )}
            </div>
        </Slide>
    )
}
