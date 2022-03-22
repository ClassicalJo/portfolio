import ActionZone from "./ActionZone"
import gh from '../../assets/images/github.png'
import play from '../../assets/images/play.png'
export default function Entry({ test, repo, title, desc, tags, src }) {
    return (
        <div className="entry">
            <div className="image-zone">
                <video
                    height={500}
                    width={500}
                    src={src} controls loop />
            </div>
            <div className="text-zone">
                <p className='title'>{title}</p>
                <p className="desc">{desc}</p>
                <hr></hr>
                <p className="tags">{tags.join(", ")}</p>
                <ActionZone repo={repo} test={test} gh={gh} play={play} />
            </div>
            
        </div>
    )

}
