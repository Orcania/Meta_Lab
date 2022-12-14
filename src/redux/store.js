import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import exampleReducer from './reducers/exampleReducer';
import modalReducer from './reducers/modalReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    exampleReducer,
    modalReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
