import { createStore, applyMiddleware, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';


//import root reducer
import rootReducer from '../reducers/index';

//create an object for the default data
var questions = [];
const defaultState = {
    questions,
    checkedValue: []
};

const createStoreWithMiddleware =
    compose( applyMiddleware(thunkMiddleware) )(createStore);


function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}

const store = configureStore(defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
