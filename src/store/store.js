import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persist } from './middleware';
import * as reducers from './reducers';

const middleware = [
    thunkMiddleware,
    persist,
];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

export default createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware)
);
