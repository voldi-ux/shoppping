import { all,call } from 'redux-saga/effects'
import { userSaga} from '../user_reducer/user_sagas'
import { shopSaga } from '../shop_data/shop_sagas'
import {cartSagas } from '../cart/cart_sagas'


export function* rootSaga() {
    yield all([
         call(shopSaga),
        call(userSaga),
        call(cartSagas)
    ])
}