
import { LOGIN_SUCCESS,LOGIN_FAILURE } from '../actions/index';

const INITIAL_STATE ={ login: null,loginFail:false,errorMessage:null };
export default function(state = INITIAL_STATE, action) {
    //console.log('inglader',action.payload)
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log('Successx')
            return { login: action.payload.data};
        case LOGIN_FAILURE:
            console.log('Fail')
            return {loginFail: true, errorMessage:'Login Fail'};
        default:
            return state;
    }
}




