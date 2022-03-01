import { Context } from "../common/Context"
import { useContext } from "react"

export default function Header() {
    let { scroll, language } = useContext(Context)
    let { current, toggle } = language
    console.log(current)
    return (
        <div className='header' >
            <div className="switch">
                <input type="checkbox" onClick={toggle} />
                <span className="slider" />
            </div>

            <div className="cv" onClick={scroll}>
                <p>cv</p>
            </div>

        </div>
    )
}
