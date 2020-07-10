import  { combineReducers } from 'redux';

import userReducer from '../user/user-reducer'
import roomReducer from '../rooms/room.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    rooms: roomReducer
});

export default rootReducer;