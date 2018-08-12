import React from 'react';
import ReactDOM from 'react-dom';
import theme from './assets/react-toolbox/theme';
import './assets/bootstrap.min.css';
import { App } from "./components/App";
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import registerServiceWorker from './registerServiceWorker';

const themeProvider = (<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
);


const Index = () => { return <div> Test</div> }

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
