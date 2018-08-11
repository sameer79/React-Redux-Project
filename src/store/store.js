import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import counterReducer from '../reducers/counterReducer';
import resultsReducer from '../reducers/resultsReducer';

const mergeReducers = combineReducers({
    ctrReducer: counterReducer,
    resReducer: resultsReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispach action ', action);
            const result = next(action);
            console.log('[Middleware store state]', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;


const store = createStore(mergeReducers, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;