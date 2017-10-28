import { createStore, applyMiddleware, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index';
import mySaga from '../actions/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
