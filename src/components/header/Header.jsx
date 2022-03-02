import { Context } from "../common/Context"
import { useContext } from "react"
import Switch from "./Switch.jsx"

export default function Header() {
    let { scroll } = useContext(Context)
    return (
        <div className='header' >
            <Switch width={100} height={30} />
            <div className="cv" onClick={scroll}>
                <p>cv</p>
            </div>

        </div>
    )
}
