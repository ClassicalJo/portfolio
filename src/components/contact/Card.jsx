import { useRef, useEffect } from "react"
import Copy from "./Copy"
import Wrapper from "../common/Wrapper"
export default function Card({ copyLang, toggle, onKeyDown }) {
    let mailRef = useRef()
    let focusRef = useRef()
    useEffect(() => {
        focusRef.current.focus()
    }, [])
    function copy() {
        mailRef.current.select()
        document.execCommand('copy')
        focusRef.current.focus()
    }
    return (
        <div className='card' onKeyDown={onKeyDown}>
            <Wrapper>
                <Wrapper>
                    <div className="close"
                        ref={focusRef}
                        tabIndex={0}
                        onClick={toggle} ><p>✖</p></div>
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

