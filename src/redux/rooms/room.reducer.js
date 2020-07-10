import roomActionTypes from './rooms.actiontypes';
import DATA_JS from '../../data'

const INITIAL_STATE = {
    rooms: DATA_JS
}

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case roomActionTypes.ROOM_ITEMS:
            return {
                ...state
            }
    
        default:
            return state;
    }
}
export default roomReducer;