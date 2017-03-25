
import { TOKEN } from '../actions/index';

const INITIAL_STATE ={ token_check: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case TOKEN:
            console.log('s',action.payload.data)
            return { token_check: action.payload.data };
        default:
            return state;
    }
}

