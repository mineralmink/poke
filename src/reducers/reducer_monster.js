
import { MONSTER } from '../actions/index';

const INITIAL_STATE ={ monster: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case MONSTER:
            return { monster: action.payload.data };
        default:
            return state;
    }
}

