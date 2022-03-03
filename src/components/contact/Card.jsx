import { useRef } from "react"
import Copy from "./Copy"
import Wrapper from "../common/Wrapper"
export default function Card({ copyLang, toggle, onKeyDown }) {
    let mailRef = useRef()

    function copy() {
        mailRef.current.select()
        document.execCommand('copy')
        mailRef.current.blur()
    }
    return (
        <div className='card' onKeyDown={onKeyDown}>
            <Wrapper>
                <Wrapper>
                    <div className="close"
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && toggle()} onClick={toggle} ><p>✖</p></div>
                    <div className="line">
                        <p><span>👨‍🦱</span>Jose Barrientos</p>
                    </div>
                    <div className="line">
                        <p><span>🏡</span>Ciudad Autónoma de Buenos Aires, Argentina</p>                    </div>
                    <div className="line">
                        <p>
                            <span>📧</span>
                            <a href="mailto:jb.barrientos@yahoo.com">
                                <input type="text" defaultValue="jb.barrientos@yahoo.com" ref={mailRef} />
                            </a>
                        </p>
                    </div>
                    <Copy onClick={copy} >
                        <p>{copyLang}</p>
                    </Copy>
                </Wrapper>
            </Wrapper>
        </div >
    )
}

