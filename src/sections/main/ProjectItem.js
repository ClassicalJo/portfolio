import React from 'react'
import { Event } from "../../App"
let Item = props => {
    return (
        <div className="item">
            <div className="image-wrapper">
                <img className="project-image"
                    src={props.picture}
                    alt={props.title}
                />
            </div>

            <div className="item-card">
                <h2>{props.title}</h2>
                <p className="item-body">{props.text}</p>
                <p className="item-tags">Tags: {props.tags.join(", ").toString()}</p>
                <div className="item-buttons">
                    <p><a onClick={() => Event("REPO", "Clicked to see repository of " + props.title, props.repo)} href={props.repo} target="_blank" rel="noopener noreferrer">Repository</a></p>
                    <p><a onClick={() => Event("TRYIT", "Clicked to see live version of " + props.title, props.sample)} href={props.sample} target="_blank" rel="noopener noreferrer">Try it</a></p>
                </div>
            </div>

        </div>
    )
}
export default Item
