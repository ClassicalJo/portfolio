import Card from './card'
import projectList from '../projects/list.json'
import { useContext } from 'react'
import { Context } from '../common/Context'
// let importAll = r => r.keys().map(r)
// let webms = importAll(require.context('../../assets/projects/webms')).reverse()

export default function Grid() {
    let projects = Object.keys(projectList).map(k => projectList[k]).reverse()

    let { language, videos } = useContext(Context)
    return (
        <div className="grid">
            {projects
                .map((k, i) => <Card key={`card${i}`}
                    first={i === 0}
                    content={projectList[k]}
                    title={k.text[language.current].title}
                    desc={k.text[language.current].desc}
                    test={k.test}
                    repo={k.repo}
                    webm={videos[k.id]}
                    tags={k.text[language.current].tags}
                    time={100 + 100 * i} />)}
        </div>

    )
}
