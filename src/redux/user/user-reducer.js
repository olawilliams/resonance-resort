import userActionTypes from './user-actiontypes';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            }
            
        case userActionTypes.SIGN_IN_FAILURE: 
        case userActionTypes.SIGN_UP_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload
            }
           
    
        default:
           return state;
    }
};

export default userReducer;