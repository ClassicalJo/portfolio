import React from 'react'
import { preloadArray, Event } from "../App"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    title: "Pokedex",
                    picture: preloadArray[7].src,
                    text: "An implementation of a Pokedex using the PokeAPI database. Basically my first approach at working with RESTful API's, React and Redux.",
                    repo: "http://github.com/classicaljo/pokedex/",
                    sample: "http://classicaljo.github.io/pokedex",
                    tags: ['react', "redux", 'api', 'css3', 'unfinished'],
                    show: true,
                },
                {
                    title: "blinkjs",
                    picture: preloadArray[6].src,
                    text: "Hey, look at that, I updated the BlinkJS with a new enemy and some other things. You should check that out.",
                    repo: "http://github.com/classicaljo/blinkjs",
                    sample: "http://classicaljo.github.io/blinkjs",
                    tags: ['react', 'matterJS', "game", "animations", 'svg', 'unfinished'],
                    show: true,
                },
                {
                    title: "Sudoku & Solver",
                    picture: preloadArray[5].src,
                    text: "So, i've been told that having a sudoku solver in your portfolio is a good idea to demonstrate your ability to design and implement algorithms. So I made one.",
                    repo: "http://github.com/classicaljo/sudoku",
                    sample: "http://classicaljo.github.io/sudoku",
                    tags: ['javascript', "game", "algorithm", 'finished'],
                    show: true,
                },
                {
                    title: "blinkjs",
                    picture: preloadArray[4].src,
                    text: "Had some free time and started doodling with Matter-js, which kinda evolved in this monstruosity. But I love it. Kinda focusing on making easy to mod",
                    repo: "http://github.com/classicaljo/blinkjs",
                    sample: "http://classicaljo.github.io/blinkjs",
                    tags: ['react', 'matterJS', "game", "animations", 'svg', 'unfinished'],
                    show: true,
                },
                {
                    title: "Memotest",
                    picture: preloadArray[3].src,
                    text: "A memotest based on the award-winning TV Series Steven Universe™. I loved working with that colour palette.",
                    repo: "http://github.com/classicaljo/memotest/",
                    sample: "http://classicaljo.github.io/memotest/",
                    tags: ["javascript", "sass", 'cypress.io', 'game', 'finished'],
                    show: true,

                },
                {
                    title: "Simple form",
                    picture: preloadArray[2].src,
                    text: "Just a simple form project with front-end validation.",
                    repo: "http://github.com/classicaljo/simple-form",
                    sample: "http://classicaljo.github.io/simple-form/",
                    tags: ['javascript', 'form', 'normalizer.css', 'finished'],
                    show: true,
                },
                {
                    title: "Barking Board",
                    picture: preloadArray[1].src,
                    text: "Barking board was an experiment to make something similar to a clicker that kinda spiraled out of control.",
                    repo: "http://github.com/classicaljo/barking-board/",
                    sample: "http://classicaljo.github.io/barking-board/",
                    tags: ['react', 'sass', 'gulp', 'unfinished', 'game'],
                    show: true,
                },
                {
                    title: "Simon says",
                    picture: preloadArray[0].src,
                    text: "My first project was to develop an implementation of Simon Says. I'm honestly kinda proud of it.",
                    repo: "http://github.com/classicaljo/simon-dice",
                    sample: "http://classicaljo.github.io/simon-dice/",
                    tags: ['javascript', 'html', 'css3', 'finished', 'game'],
                    show: true
                }]
        }

        this.tags = this.getTags()

    }

    getTags = () => {
        let tagList = []
        for (let i = 0; i < this.state.items.length; i++) {
            this.state.items[i].tags.forEach((key) => tagList.push(key))
        }
        return tagList.filter((key, index) => tagList.indexOf(key) === index).sort()
    }

    hasTag = (string, array) => {
        if (array.indexOf(string) < 0)
            return false
        else { return true }
    }

    filterTags = (e) => {
        let shallowCopy = { ...this.state.items }
        for (let i = 0; i < this.state.items.length; i++) {
            shallowCopy[i].show = true
            if (!this.hasTag(e.target.id, this.state.items[i].tags)) {
                shallowCopy[i].show = false
            }
        }

        this.setState({
            items: shallowCopy
        })
    }

    allTags = () => {
        let shallowCopy = { ...this.state.items }
        for (let i = 0; i < this.state.items.length; i++) {
            shallowCopy[i].show = true
        }
        this.setState({
            items: shallowCopy
        })
    }

    render() {
        return (
            <div className="section projects">
                <p className="project-text">These are my projects, from newest to oldest</p>
                <p className="project-text">Filter by tags: <span className="small-text"><span onClick={() => this.allTags()}>all tags</span> </span>
                    {this.tags.map((key) =>
                        <span key={this.tags.indexOf(key)} className="small-text">
                            <span id={key}
                                onClick={(e) => this.filterTags(e)}>
                                {key}
                            </span> </span>)}
                </p>

                {this.state.items.map((key, index) => {
                    if (key.show) {
                        return (
                            <div className="item" key={index}>
                                <div className="image-wrapper">
                                    <img className="project-image" src={key.picture} alt={key.title} />
                                </div>

                                <div className="item-card">
                                    <h2>{key.title}</h2>
                                    <p className="item-body">{key.text}</p>
                                    <p className="item-tags">Tags: {key.tags.join(", ").toString()}</p>
                                    <div className="item-buttons">
                                        <p><a onClick={() => Event("REPO", "Clicked to see repository of " + key.title, key.repo)} href={key.repo} target="_blank" rel="noopener noreferrer">Repository</a></p>
                                        <p><a onClick={() => Event("TRYIT", "Clicked to see live version of " + key.title, key.sample)} href={key.sample} target="_blank" rel="noopener noreferrer">Try it</a></p>
                                    </div>
                                </div>

                            </div>)
                    }
                    else return null
                })}
            </div>
        )
    }
}
export default Projects
