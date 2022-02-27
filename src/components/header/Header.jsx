import { Context } from "../common/Context"
import { useContext } from "react"

export default function Header() {
    let { scroll } = useContext(Context)
    return (
        <div className='header' onClick={scroll}>
            <p>cv</p>
        </div>
    )
}
