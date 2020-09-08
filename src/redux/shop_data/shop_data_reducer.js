import SHOP_DATA from '../../shopData'
import types from './shop_types'
import { getMappedData } from './shop_util'

const initState = {
    collections: null,
    isFetching: false,
    message: ''
}


const collectionsReducer = (state = initState,action)=> {
    switch(action.type) {
        case types.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            }
        case types.FETCH_COLLECTIONS_SUCCECCED:
            return {
                ...state,
                isFetching:false,
                collections:getMappedData(action.payload)
            }
            case types.FETCH_COLLECTIONS_FAIL:
                return {
                    ...state,
                    message: action.payload
                }
        default:
            return state
    }
}

export default collectionsReducer