
import { SPEED } from '../actions/index';

const INITIAL_STATE ={ speed: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SPEED:
            return { speed: action.payload.data };
        default:
            return state;
    }
}

