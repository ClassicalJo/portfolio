import { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../common/Context";
import Column from "../common/Column";
import Columns from "../common/Columns";
import Slide from "../common/Slide";
import Textwall from "../common/Textwall";
import useOnScreen from "../common/useOnScreen";
import Hexagon from "./Hexagon";
import text from './text.json'

export default function Skills() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    let { language } = useContext(Context)
    useEffect(() => {
        if (!shown && isVisible) setShown(true)
    }, [isVisible, shown])

    return (
        <Slide>
            <div ref={ref} className={!shown && !isVisible ? "transparent" : 'skills'}>
                <Columns >
                    <Column>
                        <Hexagon ready={shown} language={language.current} />
                    </Column>
                    <Column>
                        <Textwall 
                        align='right'
                        text={text.skills[language.current]} />
                    </Column>
                </Columns>
            </div>
        </Slide>
    )
}
