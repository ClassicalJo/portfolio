import { useRef, useState, useEffect } from 'react'
import Slide from "../common/Slide";
import Chart from "./Chart";
import useOnScreen from '../common/useOnScreen';

export default function Tags() {
    let ref = useRef()
    let isVisible = useOnScreen(ref)
    let [shown, setShown] = useState(false)
    useEffect(() => {
        if (!shown && isVisible) setShown(true)
    }, [shown, isVisible])
    return (
        <Slide>
            <div ref={ref} className={!isVisible && !shown ? 'galaxy transparent' : 'galaxy tags'}>
                <Chart tags={tags} />
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

