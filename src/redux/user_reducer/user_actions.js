import types from './userTypes'
export const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    payload:user
})

export const signInWithGoogleStart = () => ({
    type:types.SIGN_IN_WITH_GOOGLE_START
})

export const signInWithEmailAndPasswordStart = (userData) => ({
    type:types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_START,
    payload: userData
})


export const userSessionCheck = () => ({
    type:types.CHECK_USER_SESSION
})
export const setIsloggedIn = () => ({
    type:types.SET_LOG_IN
})

export const setloggedOut = () => ({
    type:types.SET_LOG_OUT
})

export const  signUpStart = (userCredents) => ({
    type:types.SIGN_UP_START,
    payload:userCredents
})

export const setloggedOutStart = () => ({
    type:types.SET_LOG_OUT_START,
  
})