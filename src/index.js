import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

function initializeReactGA() {
    ReactGA.initialize('UA-153521299-1');
    ReactGA.pageview('/homepage')
}
