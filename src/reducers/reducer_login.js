
import { LOGIN_SUCCESS,LOGIN_FAILURE } from '../actions/index';

const INITIAL_STATE ={ login: null };
export default function(state = INITIAL_STATE, action) {
    console.log('kuft',action.payload)
    switch(action.type) {
        case LOGIN_SUCCESS:
            return { login: action.payload.data };
        case LOGIN_FAILURE:
            return { login: false};
        default:
            return state;
    }
}




