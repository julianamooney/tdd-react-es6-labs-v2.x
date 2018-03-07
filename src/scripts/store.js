import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import rootReducer from '../reducers/index';
import questions from '../data/questions.js';

const defaultState = {
    questions,
    checkedValue:[]
};

const store = createStore(rootReducer, defaultState);
const history = createHistory();
const middleware = routerMiddleware(history);

