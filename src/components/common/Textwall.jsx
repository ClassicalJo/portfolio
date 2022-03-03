export default function Textwall({ text, align = 'left'}) {
    return (
        <div className={`textwall ${align}`}>
            <p>{text}</p>
        </div>
    )
}
