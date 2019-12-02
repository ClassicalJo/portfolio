import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-153521299-1');
ReactGA.pageview('/homepage')
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
