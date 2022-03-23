import { useState } from "react"

export default function useExpand(isFirst) {
    let [expand, setExpand] = useState(isFirst)
    let [reduce, setReduce] = useState(false)
    let toggle = () => {
        if (!expand) setExpand(true)
        if (expand && !reduce) {
            setReduce(true)
            setTimeout(() => {
                setExpand(false)
                setReduce(false)
            }, 500)
        }
    }
    return { expand, reduce,toggle }
}
