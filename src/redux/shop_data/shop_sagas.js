import { takeLatest,put, call,all } from 'redux-saga/effects'
import types from './shop_types'

function* fetchstart() {
     try {
        const resp = yield call(fetch, 'http://localhost:4000/shopcollection') 
        const data = yield resp.json()
        yield put({type:types.FETCH_COLLECTIONS_SUCCECCED,payload:data})
        
     } catch (err) {
         yield put({
             type:types.FETCH_COLLECTIONS_FAIL,
             payload:err.message
         })
     }
}

export function* fetchStartAsync() {
    yield takeLatest(types.FETCH_COLLECTIONS_START, fetchstart)
}

export function*shopSaga() {
   yield all([
       call(fetchStartAsync)
   ])
}


