let importAll = r => r.keys().map(r)
let images = importAll(require.context('../../../src/images/projects', false, /\.(png|jpe?g|svg)$/))
let items = [
    {
        title: "CRUD Club",
        picture: images[9],
        text: "A node server hosting a RESTful API about English Football Clubs because why not.",
        repo: "http://github.com/classicaljo/crud-club",
        sample: "http://crud-club.herokuapp.com",
        tags: ["node", "react", "finished", 'api', 'material', 'express'],
        show: true

    },
    {
        title: "Pathfinder",
        picture: images[8],
        text: "Another entry on 'how to prove you can design and implement an algorithm'. Also made in typescript because why not.",
        repo: "http://github.com/classicaljo/pathfinder",
        sample: "http://classicaljo.github.io/pathfinder",
        tags: ["typescript", "css3", "unfinished", 'algorithm'],
        show: true

    },
    {
        title: "Pokedex",
        picture: images[7],
        text: "An implementation of a Pokedex using the PokeAPI database. Basically my first approach at working with RESTful API's, React and Redux.",
        repo: "http://github.com/classicaljo/pokedex/",
        sample: "http://classicaljo.github.io/pokedex",
        tags: ['react', "redux", 'api', 'css3', 'unfinished'],
        show: true,
    },
    {
        title: "blinkjs",
        picture: images[6],
        text: "Hey, look at that, I updated the BlinkJS with a new enemy and some other things. You should check that out.",
        repo: "http://github.com/classicaljo/blinkjs",
        sample: "http://classicaljo.github.io/blinkjs",
        tags: ['react', 'matterJS', "game", "animations", 'svg', 'finished'],
        show: true,
    },
    {
        title: "Sudoku & Solver",
        picture: images[5],
        text: "So, i've been told that having a sudoku solver in your portfolio is a good idea to demonstrate your ability to design and implement algorithms. So I made one.",
        repo: "http://github.com/classicaljo/sudoku",
        sample: "http://classicaljo.github.io/sudoku",
        tags: ['javascript', "game", "algorithm", 'finished'],
        show: true,
    },
    {
        title: "blinkjs",
        picture: images[4],
        text: "Had some free time and started doodling with Matter-js, which kinda evolved in this monstruosity. But I love it. Kinda focusing on making easy to mod",
        repo: "http://github.com/classicaljo/blinkjs",
        sample: "http://classicaljo.github.io/blinkjs",
        tags: ['react', 'matterJS', "game", "animations", 'svg', 'unfinished'],
        show: true,
    },
    {
        title: "Memotest",
        picture: images[3],
        text: "A memotest based on the award-winning TV Series Steven Universe™. I loved working with that colour palette.",
        repo: "http://github.com/classicaljo/memotest/",
        sample: "http://classicaljo.github.io/memotest/",
        tags: ["javascript", "sass", 'cypress.io', 'game', 'finished'],
        show: true,

    },
    {
        title: "Simple form",
        picture: images[2],
        text: "Just a simple form project with front-end validation.",
        repo: "http://github.com/classicaljo/simple-form",
        sample: "http://classicaljo.github.io/simple-form/",
        tags: ['javascript', 'form', 'normalizer.css', 'finished'],
        show: true,
    },
    {
        title: "Barking Board",
        picture: images[1],
        text: "Barking board was an experiment to make something similar to a clicker that kinda spiraled out of control.",
        repo: "http://github.com/classicaljo/barking-board/",
        sample: "http://classicaljo.github.io/barking-board/",
        tags: ['react', 'sass', 'gulp', 'unfinished', 'game'],
        show: true,
    },
    {
        title: "Simon says",
        picture: images[0],
        text: "My first project was to develop an implementation of Simon Says. I'm honestly kinda proud of it.",
        repo: "http://github.com/classicaljo/simon-dice",
        sample: "http://classicaljo.github.io/simon-dice/",
        tags: ['javascript', 'html', 'css3', 'finished', 'game'],
        show: true
    }
]
let tags = Array.from(new Set(Object.keys(items).map(key => items[key].tags).flat()))
export default { items, tags }

