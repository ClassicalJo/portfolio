export default function Tags({ tags }) {
    return (
        <div className="tags">
            <hr className="line" />
            <p>{tags.map((k, i) => <span key={"span" + i}>{k} </span>)}</p>
        </div>
    )
}
