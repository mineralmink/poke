
import { MONSTER_SUCCESS,MONSTER_FAILURE,MONSTER } from '../actions/index';

const INITIAL_STATE ={ monster: null,mon_fail:false };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case MONSTER:
            return { monster: action.payload.data };
        // case MONSTER_FAILURE:
        //     return { mon_fail:true };
        default:
            return state;
    }
}

