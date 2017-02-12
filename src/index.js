import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import ReduxPromise from 'redux-promise';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <App />
    </Provider>,
    document.getElementById('root')
)
;
