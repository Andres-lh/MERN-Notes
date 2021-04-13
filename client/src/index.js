import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDom.render(
    <Provider store = {store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

