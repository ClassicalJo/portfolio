import React, { useEffect } from 'react';
import Header from './Header'
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter as Router } from "react-router-dom"
import ReactGA from 'react-ga';
import './assets/css/main.css';


let importAll = r => r.keys().map(r)
export var images = importAll(require.context("./images/projects/", false, /\.png$/))
export var preloadArray = []

for (let i = 0; i < images.length; i++) {
  let preload = new Image()
  preload.src = images[i]
  preloadArray.push(preload)
}

export const trackingId = "UA-153521299-1";
export const initGA = trackingId => ReactGA.initialize(trackingId);
export const pageView = () => ReactGA.pageview(window.location.pathname + window.location.search)

export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

let useMount = fn => useEffect(fn, [])

let App = () => {
  useMount(() => {
    initGA(trackingId)
    pageView()
  })
  
  return (
    <Router >
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}
export default App
