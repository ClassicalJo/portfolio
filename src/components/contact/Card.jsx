import { useRef} from "react"
import SmolButton from "./SmolButton"
import Wrapper from "../common/Wrapper"

export default function Card({ toggle }) {
    let mailRef = useRef()

    function copy() {
        mailRef.current.select()
        document.execCommand('copy')
        mailRef.current.blur()
    }
    return (
        <div className='card'>
            <Wrapper>
                <Wrapper>
                    <div className="close" onClick={toggle} ><p>✖</p></div>
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
                    <SmolButton
                        onClick={copy} ><p>Copy mail</p></SmolButton>
                </Wrapper>
            </Wrapper>
        </div >
    )
}

