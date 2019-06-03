'use strict';

import '../asset/css/style.scss';
import 'antd/dist/antd.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

//可以打印redux日志
import logger from 'redux-logger';

//redux异步中间件-thunk
import thunk from 'redux-thunk';

///redux异步中间件-saga
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import appReducer from './reducers';
import AppRouter from './router';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware, logger];

const store = createStore(appReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);