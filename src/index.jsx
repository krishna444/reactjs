import React from 'react';
import ReactDOM from 'react-dom';
import theme from './assets/react-toolbox/theme';
import './assets/bootstrap.min.css';
import {App} from "./components/App.jsx";
import registerServiceWorker from './registerServiceWorker';

const Index = () => { return <div> Test</div> }

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
