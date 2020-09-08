import { takeLatest,put, all,call, takeEvery } from 'redux-saga/effects'
import types from './userTypes'
import { GoogleProvider,auth, createUser, getCurrentUser } from '../../firebase/firebase_auth'
import { setCurrentUser, setIsloggedIn, setloggedOut } from './user_actions';


 function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(GoogleProvider)
        
        const { email,displayName,photoUrl } = user;
        const loggedInUser = {
            email,
            displayName,
            photoUrl
        }
        yield call(createUser, loggedInUser);
        yield put(setIsloggedIn())
    } catch (error) {
        yield put({
            type:types.SIGN_IN_WITH_GOOGLE_FAIL,
            payload:error.message
        })
    }

 } 

export function* signInWithGoogleStart() {
   yield takeLatest(types.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)  
}


function* signWithEmailAndpassword(action) {
    try {
    const { UserPassword,UserEmail } = action.payload
    const {user: {email,displayName}} = yield auth.signInWithEmailAndPassword(UserEmail,UserPassword)
    yield put(setIsloggedIn())
    // const response = yield call(fetch, `http://localhost:4000/getuser?displayName=${displayName}&email=${email}`)
    // const user = yield response.json()
    // yield put({type:types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCECED, payload:user})
    } catch (error) {
        yield put({
            type:types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL,payload:error.message
        })
    }
}


function*userSession () {
    const user = yield getCurrentUser();
    console.log(user)
    if(!user){
        return;
    } else {
        yield put(setIsloggedIn())
        const  {email,displayName} = user;
        const response = yield call(fetch, `http://localhost:4000/getuser?displayName=${displayName}&email=${email}`)
        const collectedUser = yield response.json()
        yield put(setCurrentUser(collectedUser))
    }

}
export function* onSessionCheck () {
    yield takeLatest(types.CHECK_USER_SESSION, userSession)
}
export function* signWithEmailAndpasswordStart() {
    yield takeEvery(types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_START, signWithEmailAndpassword)
}

function* logOut () {
    yield auth.signOut()
    yield put(setloggedOut())
}
export function* onLogOut() {
    yield takeLatest(types.SET_LOG_OUT_START, logOut)
}


function*signUp(action) {

    try {
        const {email,password,displayName } = action.payload
         yield auth.createUserWithEmailAndPassword(
          email,password
          );

      let   CurrentUser = auth.currentUser
        yield put(setIsloggedIn())
        yield   CurrentUser.updateProfile({
              displayName:displayName
          })
      
    } catch(err) {
        console.log(err.message)
    }
}

export function* onSignUpstart(){
    yield takeLatest(types.SIGN_UP_START,signUp)
}

export function*userSaga() {
    yield all([
        call(signInWithGoogleStart),
        call(signWithEmailAndpasswordStart),
        call(onSessionCheck),
        call(onLogOut),
        call(onSignUpstart)
    ])
}