import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../user_reducer/user_reducer'
import CartReducer from '../cart/cart_reducer'
import collectionsReducer from '../shop_data/shop_data_reducer'
import direcotryReducer from '../directory/directory_reducer'


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart:CartReducer,
    collections: collectionsReducer,
    homeItems:direcotryReducer
})
export default persistReducer(persistConfig,rootReducer)