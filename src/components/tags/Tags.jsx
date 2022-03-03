import { useRef, useState, useEffect, useContext } from 'react'
import Slide from "../common/Slide";
import Chart from "./Chart";
import useOnScreen from '../common/useOnScreen';
import Columns from '../common/Columns';
import Column from '../common/Column';
import Textwall from '../common/Textwall';
import text from './text.json'
import { Context } from '../common/Context';
export default function Tags() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    let { language } = useContext(Context)
    useEffect(() => {
        if (!shown && isVisible) setShown(true)
    }, [shown, isVisible])
    return (
        <Slide>
            <div ref={ref} className={!isVisible && !shown ? 'galaxy transparent' : 'galaxy tags'}>
                <Columns>
                    <Column>
                        <Chart tags={tags} language={language.current} />
                    </Column>
                    <Column>
                        <Textwall text={text.tags[language.current]} />
                    </Column>
                </Columns>

            </div>
        </Slide>
    )
}

const tags = {
    "JS": {
        "React": ["Class components", "Functional components", "Hooks", "Component lifecycle", "Webpack", "Babel", "Redux"],
        "CSS": ["Box model", "Flexbox", "Grid", "SASS", "Modularity", "Reusability", "Media queries", "Material-UI", "Bootstrap", "Styled components"],
        "Node": ["Express", "Postman", "JWT", "WebSockets", "Socket.io", "NextJS", "REST", "PostgreSQL", "Authentication"],
    }
}

