import {all, call,put,takeLatest} from 'redux-saga/effects'

import userTypes from '../user_reducer/userTypes'
import cartTypes from './cart_types'
import { clearCartOnSignOut } from './cart_actions'

function* clearCart() {
     yield put(clearCartOnSignOut())
}

function* onSignOut() {
    yield takeLatest(userTypes.SET_LOG_OUT, clearCart)
}


export function* cartSagas() {
    yield all([
        call(onSignOut)
    ])
}