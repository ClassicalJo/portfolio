// <a href="https://www.flaticon.com/free-icons/play-button" title="play button icons">Play button icons created by Those Icons - Flaticon</a>
export default function Play({ test, src }) {
    switch (!!test) {
        case (true): return (
            <a href={test} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <img width="64" height="64" src={src} />
            </a>
        )
        default: return (
            <div className="hidden"></div>
        )
    }
    
}
