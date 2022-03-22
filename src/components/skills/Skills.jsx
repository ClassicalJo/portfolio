import { useContext } from "react";
import { Context } from "../common/Context";
import Column from "../common/Column";
import Columns from "../common/Columns";
import Slide from "../common/Slide";
import Textwall from "../common/Textwall";
import Hexagon from "./Hexagon";
import text from './text.json'

export default function Skills() {
    let { language } = useContext(Context)
    return (
        <Slide>
            <div className='skills'>
                <Columns >
                    <Column>
                        <Hexagon ready={true} language={language.current} />
                    </Column>
                    <Column>
                        <Textwall
                            align='right'
                            text={text.skills[language.current]} />
                    </Column>
                </Columns>
            </div>
        </Slide>
    )
}
