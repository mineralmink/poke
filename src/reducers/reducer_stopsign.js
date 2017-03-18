
import { STOPSIGN } from '../actions/index';

const INITIAL_STATE ={ stopsigns: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case STOPSIGN:
            return { stopsigns: action.payload.data };
        default:
            return state;
    }
}

