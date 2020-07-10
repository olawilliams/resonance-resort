import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import rootReducer from '../root-reducer/root-reducer'
import rootSaga from '../root-saga/root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];


export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)