import UserActionTypes from './userTypes'
import types from '../shop_data/shop_types'

const initialState = {
    isloggedIn: false,
    currentUser: null,
    message: null
}

const userReducer = (state = initialState , action) => {
     
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload.user,
          message:action.payload.message

        }
        case UserActionTypes.SET_LOG_OUT:
            return {
                ...state,
                isloggedIn:false
            }
        case UserActionTypes.SET_LOG_IN:
            return {
                ...state,
                isloggedIn:true
            }
        case UserActionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL:
        case UserActionTypes.SIGN_IN_WITH_GOOGLE_FAIL:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state

    }
}

export default userReducer