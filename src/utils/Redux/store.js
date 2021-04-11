import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './auth/reducer';
import languageReducer from './language/reducer';

const reducers = combineReducers({
    authStore: authReducer,
    languageStore: languageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
