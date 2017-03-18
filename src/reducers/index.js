import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import LoginReducer from './reducer_login';
import StopSignReducer from './reducer_stopsign';
import MonsterReducer from './reducer_monster';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    login: LoginReducer,
    stopsigns: StopSignReducer,
    monster: MonsterReducer,
    form: formReducer
});

export default rootReducer;
