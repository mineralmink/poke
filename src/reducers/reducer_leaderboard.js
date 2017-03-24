
import { LEADERBOARD } from '../actions/index';

const INITIAL_STATE ={ leaderboard: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LEADERBOARD:
            return { leaderboard: action.payload.data };
        default:
            return state;
    }
}



