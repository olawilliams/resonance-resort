import userActionTypes from './user-actiontypes'

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const facebookSignInStart = () => ({
    type: userActionTypes.FACEBOOK_SIGN_IN_START
});

export const emailSignInStart = userCredential => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: userCredential
});

export const emailSignUpStart = userCredential => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredential
});

export const signUpSuccess = user => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})