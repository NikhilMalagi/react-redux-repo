import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

import rootReducer from '../reducers';

const configureStore = () => {
    // Creating the middleware
    const sagaMiddleware = createSagaMiddleware();
    // Store
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);

    store.dispatch({type : "TRIAL"})
    return store;
};

export default configureStore;
