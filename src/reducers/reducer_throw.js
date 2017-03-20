
import { THROW } from '../actions/index';

const INITIAL_STATE ={ throw: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case THROW:
            return { throw: action.payload.data };
        default:
            return state;
    }
}




