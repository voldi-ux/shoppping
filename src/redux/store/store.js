import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootSaga} from '../root_saga/root_saga'
import {createLogger} from 'redux-logger'
import saga from 'redux-saga'
import root_reducer from '../root-reducer/root_reducer'
import { persistStore
 } from 'redux-persist'

 const sagaMiddle = saga() 
 const logger = createLogger()
 const middlewares = [logger,sagaMiddle]


export const store = createStore(root_reducer,applyMiddleware(...middlewares))
sagaMiddle.run(rootSaga)
export const persistor = persistStore(store)

