
import { FIGHT } from '../actions/index';

const INITIAL_STATE ={ fight: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FIGHT:
            return { fight: action.payload.data };
        default:
            return state;
    }
}



