
import { AI_MONSTER } from '../actions/index';

const INITIAL_STATE ={ aimonster: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AI_MONSTER:
            return { aimonster: action.payload.data };
        default:
            return state;
    }
}




