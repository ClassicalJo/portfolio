import React from 'react';
import Canvas from './Canvas'
import Simon from "./simon-dice.png"
import BarkingBoard from "./barking-board.png"
import ContactInformation from "./contact-information.png"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas: false,
      showText: true,
      showWelcome: false,
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
    setTimeout(() => { this.setState({ showWelcome: true }) }, 20000)
    setTimeout(() => { this.setState({ showItems: true }) }, 22000)


  }

  init() {
    window.requestAnimationFrame(() => { this.draw(1, 4000) });
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(2, 2000) }) }, 4000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(4, 2000) }) }, 6000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(8, 2000) }) }, 8000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(16, 2000) }) }, 10000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(32, 2000) }) }, 12000)
    setTimeout(() => { window.requestAnimationFrame(() => { this.draw(64, 2000) }) }, 14000)
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
        {(this.state.showText) &&
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
            Welcome, </a><a className="stranger">stranger.</a></p>}

        {(this.state.showItems) &&
          <div className="item-container">
            <div className="item"><a href="https://classicaljo.github.io/simon-dice/" target="_blank"><img src={Simon} alt="Simon dice" /></a></div>
            <div className="item"><a href="https://classicaljo.github.io/barking-board/" target="_blank"><img src={BarkingBoard} alt="Barking board" /></a></div>
            <div className="item"><a href="https://classicaljo.github.io/contact-info/" target="_blank"><img src={ContactInformation} alt="Contact information" /></a></div>
          </div>}


      </div>
    )
  }
}

function random(number) {
  return Math.floor(Math.random() * number)
}

export default App;
