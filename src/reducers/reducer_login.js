
import { LOGIN } from '../actions/index';

const INITIAL_STATE ={ login: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOGIN:
            return { login: action.payload.data };
        default:
            return state;
    }
}

