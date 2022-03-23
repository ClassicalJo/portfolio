import Play from "./Play";
import Repo from "./Repo";

export default function ActionZone({ repo, test, gh, play }) {
    return (
        <div className="action-zone">
            <Play src={play} test={test} />
            {repo && <Repo src={gh} repo={repo} />}
        </div>
    )
}
