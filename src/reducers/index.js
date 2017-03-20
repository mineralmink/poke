import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import StopSignReducer from './reducer_stopsign';
import MonsterReducer from './reducer_monster';
import ThrowReducer from './reducer_throw';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    login: LoginReducer,
    stopsigns: StopSignReducer,
    monster: MonsterReducer,
    throw: ThrowReducer,
    form: formReducer
});

export default rootReducer;
