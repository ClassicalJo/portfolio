import { Context } from "../common/Context"
import { useContext } from "react"
import Switch from "./Switch.jsx"
import CV from "./CV"

export default function Header() {
    let { scroll, language } = useContext(Context)
    return (
        <div className='header' >
            <CV
                tabIndex={1}
                width={100}
                height={50}
                scroll={scroll}
                language={language.current}
            />
            <Switch
                width={100}
                height={50}
                tabIndex={2}
            />
        </div>
    )
}
