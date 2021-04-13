import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const INITIAL_STATE = {

}

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
