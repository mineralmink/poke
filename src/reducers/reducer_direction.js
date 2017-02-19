/**
 * Created by mineralmink on 2/18/2017 AD.
 */

import { GO_BACKWARD,GO_FORWARD,GO_LEFT,GO_RIGHT } from '../actions/index';

const INITIAL_STATE ={ direction: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GO_FORWARD:
            return { direction: action.payload.data };
        case GO_BACKWARD:
            return { direction: action.payload.data };
        case GO_LEFT:
            return { direction: action.payload.data };
        case GO_RIGHT:
            return { direction: action.payload.data };
        default:
            return state;
    }
}

