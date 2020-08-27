import React, { useState } from 'react'
import list from "./ProjectsList"
import Item from "./ProjectItem"

let Projects = () => {
    function filterTags(e) {
        let copy = [...items]
        for (let i = 0; i < copy.length; i++) {
            copy[i].show = true
            if (copy[i].tags.indexOf(e.target.id) < 0) copy[i].show = false
        }
        setItems(copy)
    }
    function allTags() {
        let copy = [...items]
        for (let index in copy) copy[index].show = true
        setItems(copy)
    }

    let [items, setItems] = useState(list.items)

    return (
        <div className="section projects">
            <p className="project-text">These are my projects, from newest to oldest</p>
            <p className="project-text">Filter by tags: <span className="small-text"><span onClick={allTags}>all tags</span> </span>
                {list.tags.map((key, index) => (
                    <span
                        key={`tag${index}`}
                        className="small-text">
                        <span
                            id={key}
                            onClick={filterTags}>
                            {key}
                        </span> </span>
                ))}
            </p>

            {items.map((key, index) => (key.show && <Item key={`item${index}`} {...key} />))}
        </div>
    )
}

export default Projects

