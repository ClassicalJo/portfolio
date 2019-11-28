import React from 'react';
import Canvas from './Canvas'
import Items from './Items'
import About from './About'
import Resume from './Resume'
import Navbar from './Navbar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas: false,
      showIntro: true,
      showWelcome: false,
      showItems: false,
      showAbout: false,
      canvasFrame: {
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.9,
        id: "canvas"
      },
      colors: ["#FCBA04", "#A50104", "#C03221", "#BE7C4D", "#F2D0A4"]
    }
    this.canvas = React.createRef();
    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    setTimeout(() => { this.showCanvas(); }, 4000)
  }

  showAbout() {
    this.setState({
      showItems: false,
      showResume: false,
      showAbout: true
    })
  }

  showItems() {
    this.setState({
      showAbout: false,
      showResume: false,
      showItems: true
    })
  }

  showResume() {
    this.setState({
      showAbout: false,
      showItems: false,
      showResume: true,
    })
  }

  showContact() {
    window.open("https://classicaljo.github.io/contact-information/index.html")
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
      let ctx = this.refs.canvas.getContext("2d")
      let originX = random(this.state.canvasFrame.width)
      let originY = random(this.state.canvasFrame.height)
      ctx.beginPath()
      ctx.moveTo(originX, originY)
      ctx.lineTo(random(this.state.canvasFrame.width), (random(this.state.canvasFrame.height)))
      ctx.lineTo(random(this.state.canvasFrame.width), (random(this.state.canvasFrame.height)))
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
            canvasFrame={this.state.canvasFrame}
            ref="canvas" />}

        {(this.state.showWelcome) &&
          <p className="welcome-container">
            <span className="welcome" >
              Welcome, stranger.</span></p>}

        {(this.state.showItems) && <Items />}
        {(this.state.showAbout) && <About />}
        {(this.state.showResume) && <Resume />}
        {(this.state.showWelcome) &&
          <Navbar
            onClickItems={() => this.showItems()}
            onClickAbout={() => this.showAbout()}
            onClickResume={() => this.showResume()}
            onClickContact={() => this.showContact()}
          />}
      </div>
    )
  }
}

function random(number) {
  return Math.floor(Math.random() * number)
}

export default App;
