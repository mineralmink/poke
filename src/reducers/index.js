import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import StopSignReducer from './reducer_stopsign';
import MonsterReducer from './reducer_monster';
import ThrowReducer from './reducer_throw';
import MonsterBagReducer from './reducer_monster_bag';
import AiMonster from './reducer_ai_monster';
import LeaderboardReducer from './reducer_leaderboard';
import TokenCheck from './reducer_token_check';
import Relogin from './reducer_relogin';
import FightReducer from './reducer_fight';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    login: LoginReducer,
    stopsigns: StopSignReducer,
    monster: MonsterReducer,
    throw: ThrowReducer,
    monsterbag: MonsterBagReducer,
    aimonster: AiMonster,
    leaderboard: LeaderboardReducer,
    tokencheck: TokenCheck,
    relogin: Relogin,
    fight:FightReducer,
    form: formReducer
});

export default rootReducer;
