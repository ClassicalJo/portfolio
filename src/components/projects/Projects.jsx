import { useMemo, useContext } from 'react'
import { Context } from '../common/Context';
import Slide from "../common/Slide";
import Entry from './Entry';
import projects from './list.json'
import text from './text.json'
export default function Projects() {
    let { language, videos } = useContext(Context)
    let lastThreeProjects = useMemo(() => Object
        .keys(projects)
        .slice(Object.getOwnPropertyNames(projects).length - 3)
        .map(k => projects[k])
        .reverse(), [])

    return (
        <Slide>
            <div className='projects'>
                <p className='title'>{text.title[language.current]}</p>
                <div className='entries'>
                    {lastThreeProjects.map((k, index) => {
                        let { test, repo } = k
                        let { title, desc, tags } = k.text[language.current]
                        let src = videos[k.id]
                        let entryProps = { test, repo, title, desc, tags, src }
                        return (
                            <Entry
                                key={`projectKey${index}`}
                                {...entryProps}
                            />
                        )
                    })}
                </div>
            </div>
        </Slide>
    )
}
