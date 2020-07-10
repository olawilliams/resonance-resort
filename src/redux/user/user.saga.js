import { takeLatest, all, put, call } from 'redux-saga/effects'
import { createUserProfileDocument, facebookProvider, googleProvider, auth } from '../../firebase/firebase-utils'
import userActionTypes from './user-actiontypes';
import { signInFailure, signInSuccess, signUpSuccess} from './user-actions'

function *getUserSnapshotFromAuth(user, additionalData) {
    try {
        const userRef =  yield createUserProfileDocument(user, additionalData);
        const userSnapshot = yield userRef.get()
        console.log(userSnapshot.data())
       yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
    } catch(error) {
        yield put(signInFailure(error))
    }
}

function *googleSignIn() {
    try {
        const  {user } = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapshotFromAuth(user)

    } catch(error) {
        yield put(signInFailure(error))
    }
}

function *facebookSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(facebookProvider);
       yield  getUserSnapshotFromAuth(user)
    }
    catch(error) {
        yield put(signInFailure(error))
    }
}

function *emailSignIn({ payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
            yield  getUserSnapshotFromAuth(user)
    } catch(error) {
        yield put(signInFailure(error))
    }
}

function *signUp({ payload: { name, email, password }}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: { name }}))
    } catch(error) {
        yield put(signInFailure(error))
    }
}

function *signInSignUp({ payload: { user, additionalData }}) {
    yield getUserSnapshotFromAuth(user, additionalData)
}

export function *onGoogleSignIn() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn )
}

export function *onFacebookSignIn() {
    yield takeLatest(userActionTypes.FACEBOOK_SIGN_IN_START, facebookSignIn)
}

export function *onEmailSignIn() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function *onEmailSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function *onSignInSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInSignUp)
}

export function *userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onFacebookSignIn),
        call(onEmailSignUp),
        call(onSignInSignUp)
        
        ])
}