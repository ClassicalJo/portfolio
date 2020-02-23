import React, { useEffect } from 'react';
import Header from './Header'
import Main from "./Main"
import Footer from "./Footer"
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import ReactGA from 'react-ga';
import './assets/css/main.css';
import "./assets/css/resume.css";
import './assets/css/projects.css';
import "./assets/css/home.css";
import "./assets/css/footer.css";
import "./assets/css/header.css";
import './assets/css/hire.css';

let importAll = r => r.keys().map(r)
let images = importAll(require.context("./images/projects/", false, /\.png$/))
let preloadArray = []
for (let i = 0; i < images.length; i++) {
  let preload = new Image()
  preload.src = images[i]
  preloadArray.push(preload)
}

let trackingId = "UA-153521299-1";
ReactGA.initialize(trackingId);
ReactGA.pageview('/homepage');

const history = createHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})

let useMount = fn => useEffect(fn, [])

let App = () => {
  useMount(() => ReactGA.pageview(window.location.pathname))
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}
export default App
