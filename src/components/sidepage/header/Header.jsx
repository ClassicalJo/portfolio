import { useContext } from 'react'
import { Context } from '../../common/Context'
export default function Header() {
    let { toggle } = useContext(Context).sidepage
    return (
        <div className="header" onClick={toggle}>
            <p>{"<<"}</p>
        </div>
    )
}
