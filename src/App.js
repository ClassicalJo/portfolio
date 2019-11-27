import React from 'react';
import Canvas from './Canvas'
import Simon from "./simon-dice.png"
import BarkingBoard from "./barking-board.png"
import Pokedex from "./pokedex.png"
import ContactInformation from "./contact-information.png"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas: false,
      showIntro: true,
      showWelcome: false,
      showItems: false,
      canvas: {
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.9,
      },
      colors: ["#FCBA04", "#A50104", "#C03221", "#BE7C4D", "#F2D0A4"]
    }
    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    setTimeout(() => { this.showCanvas() }, 4000)
  }

  showCanvas() {
    this.setState({
      showCanvas: true,
      showIntro: false,
    })

    setTimeout(() => { this.init() }, 2000)
    setTimeout(() => { this.setState({ showWelcome: true }) }, 14000)
    setTimeout(() => { this.setState({ showItems: true }) }, 14000)


  }

  init() {
    window.requestAnimationFrame(() => { this.draw(4, 2000) })
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(8, 2000) }) }, 2000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(16, 2000) }) }, 4000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(32, 2000) }) }, 6000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(64, 2000) }) }, 8000)
    
  }

  draw(ratio, time) {
    let interval = setInterval(() => {
      let ctx = document.querySelector("#canvas").getContext("2d")
      let originX = random(this.state.canvas.width)
      let originY = random(this.state.canvas.height)
      ctx.beginPath()
      ctx.moveTo(originX, originY)
      ctx.lineTo(random(this.state.canvas.width), (random(this.state.canvas.height)))
      ctx.lineTo(random(this.state.canvas.width), (random(this.state.canvas.height)))
      ctx.fillStyle = (this.state.colors[random(this.state.colors.length)])
      ctx.fill()
    }, 500 / ratio)

    setTimeout(function () { clearInterval(interval) }, time)
  }

  render() {
    return (
      <div className="app">
        {(this.state.showIntro) &&
          <p
            className="intro"
            onClick={() => this.showCanvas()}>
            Dreams aren't dreams if you devote every waking hour on them</p>}

        {(this.state.showCanvas) &&
          <Canvas
            frame={this.state.canvas} />}

        {(this.state.showWelcome) &&
          <p className="welcome-container"><a
            className="welcome" >
            Welcome, stranger.</a></p>}

        {(this.state.showItems) &&
          <div className="item-container">
            <div className="item itema"><a href="https://classicaljo.github.io/simon-dice/" target="_blank"><img src={Simon} alt="Simon dice" /></a></div>
            <div className="item itemb"><a href="https://classicaljo.github.io/barking-board/" target="_blank"><img src={BarkingBoard} alt="Barking board" /></a></div>
            <div className="item itemc"><a href="https://classicaljo.github.io/pokedex-v1.1/" target="_blank"><img src={Pokedex} alt="Pokedex" /></a></div>
            <div className="item itemd"><a href="https://classicaljo.github.io/contact-information/index.html" target="_blank"><img src={ContactInformation} alt="Contact information" /></a></div>
          </div>}


      </div>
    )
  }
}

function random(number) {
  return Math.floor(Math.random() * number)
}

export default App;
