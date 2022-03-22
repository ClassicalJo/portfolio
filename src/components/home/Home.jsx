import { useContext } from "react";
import { Context } from "../common/Context";
import Slide from "../common/Slide";

import Wrapper from "../common/Wrapper";
import text from './text.json'

export default function Home() {



    let { current } = useContext(Context).language
    let { title, subtitle } = text
    return (
        <Slide>
            <div className='home'>
                <Wrapper>
                    <p className={`${current} title`}>
                        {title[current]}
                    </p>
                    <p className={`${current} subtitle`}>
                        {subtitle[current]}
                    </p>
                </Wrapper>
            </div>
        </Slide >
    )
}
