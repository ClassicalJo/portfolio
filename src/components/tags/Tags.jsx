import { useContext } from 'react'
import Slide from "../common/Slide";
import Chart from "./Chart";
import Columns from '../common/Columns';
import Column from '../common/Column';
import Textwall from '../common/Textwall';
import text from './text.json'
import { Context } from '../common/Context';
export default function Tags() {
    let { language } = useContext(Context)
    return (
        <Slide>
            <div className='galaxy tags'>
                <Columns>
                    <Column>
                        <Chart tags={text.list} language={language.current} />
                    </Column>
                    <Column>
                        <Textwall text={text.tags[language.current]} />
                    </Column>
                </Columns>
            </div>
        </Slide>
    )
}



