import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import './static/bootstrap.min.css';
import App from './components/App';
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import registerServiceWorker from './registerServiceWorker';
const themeProvider = (<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
