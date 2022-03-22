export default function Repo({ src, repo }) {
    return (
        <a href={repo} target="_blank" rel="noopener noreferrer">
            <img width="64" height="64" src={src} alt="Github logo"/>
        </a >
    )
}
