import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import SpeedReducer from './reducer_speed';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  speed: SpeedReducer,
  form: formReducer
});

export default rootReducer;
