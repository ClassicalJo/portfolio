import React from 'react';
import Header from './Header'
import Main from "./Main"
import Footer from "./Footer"
import './assets/css/main.css';
import coolpic from "./images/coolpic.png"
import simon from './images/simon-dice.png'
import memotest from "./images/memotest.png"
import simple from "./images/simple-form.png"
import bark from "./images/barking-board.png"
import pokedex from "./images/pokedex.png"
import ReactGA from 'react-ga';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentlyShowing: "home",
      showIntro: true,
    }

    this.preload = [coolpic, simon, memotest, simple, bark, pokedex]
    this.preloaded = []
    this.preload.forEach((key) => {
      let image = new Image()
      image.src = key
      this.preloaded.push(image)
    })
    this.trackingId = "UA-153521299-1";
    ReactGA.initialize(this.trackingId);
    ReactGA.pageview('/homepage');
  }

  onClickHandler = (e) => {
    this.setState({
      currentlyShowing: e.target.id,
      showIntro: false,
    })
  }

  onEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value)
      if (e.target.value === "home()" || e.target.value === "Home()") {this.setState({ currentlyShowing: "home" })}
      else if (e.target.value === "projects()" || e.target.value === "Projects()") {this.setState({ currentlyShowing: "projects" })}
      else if (e.target.value === "resume()" || e.target.value === "Resume()") {this.setState({ currentlyShowing: "resume" })}
      else if (e.target.value === "hire()" || e.target.value === "Hire()") {this.setState({ currentlyShowing: "hire" })}
      else if (e.target.value === "github()" || e.target.value === "Github()") {window.open("https://github.com/classicaljo/", "_blank", "noopener noreferrer")}
      else (this.setState({currentlyShowing: "home"}))
      e.preventDefault()
    }
  }
  render() {
    return (
      <div className="container">
        <Header onClick={(e) => this.onClickHandler(e)} />
        <Main currentlyShowing={this.state.currentlyShowing} showIntro={this.state.showIntro} commands={(e) => this.onEnter(e)} />
        <Footer />
      </div>
    );
  }
}

export default App;
