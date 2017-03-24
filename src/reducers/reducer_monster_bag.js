/**
 * Created by mineralmink on 3/22/2017 AD.
 */


import { MONSTER_BAG_SUCCESS,MONSTER_BAG_FAILURE } from '../actions/index';

const INITIAL_STATE ={ monsterbag: null};

export default function(state = INITIAL_STATE, action) {
    console.log('mosterbag',action.payload)
    switch(action.type) {
        case MONSTER_BAG_SUCCESS:
            return { monsterbag: action.payload.data };
        case MONSTER_BAG_FAILURE:
            return { };
        default:
            return state;
    }
}

