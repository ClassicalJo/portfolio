import React, { useEffect } from 'react';
import Header from './sections/header/Header'
import Main from "./sections/Main"
import Footer from "./sections/footer/Footer"
import { BrowserRouter as Router } from "react-router-dom"
import ReactGA from 'react-ga';
import './assets/css/main.css';

//Google Analytics
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

let App = () => {
  useEffect(() => {
    initGA(trackingId)
    pageView()
  }, [])
  return (
    <Router >
      <div className="container">
        <Header />
        <Main />
      </div>
    </Router>
  )
}

export default App
