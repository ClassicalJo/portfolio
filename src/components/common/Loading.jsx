import Slide from "./Slide";

export default function Loading() {
    return (
        <Slide>
            <div className="loading">
                <svg width='200' height='200' viewBox="-75 -75 150 150">
                    <Circle x={-2} y={-10} color={"cyan"} />
                    <Circle x={2} y={-10} color={"red"} />
                    <Circle x={0} y={-10} color={"black"} />
                </svg>
            </div>
        </Slide>

    )
}

function Circle({ x, y, color }) {
    return (
        <circle
            r="5"
            cx={x}
            cy={y}
            strokeWidth="5"
            fill={color}
        >
            <animateTransform
                attributeName='transform'
                type='rotate'
                from="0 0 0"
                to="360 0 0"
                repeatCount='indefinite'
                dur='2s'
                calcMode='linear'
            />
        </circle>)
}
