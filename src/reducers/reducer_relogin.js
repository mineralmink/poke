
import { RELOGIN } from '../actions/index';

const INITIAL_STATE ={ relogin: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case RELOGIN:
            return { relogin: action.payload.data };
        default:
            return state;
    }
}

