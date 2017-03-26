import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './container/posts_index';
import Pokeball from './components/Pokeball';
import Login from './components/Login';
import FightState from './components/Leaderboard';
import SignUp from './components/SignUp';
import MonsterBag from './components/MonsterBag';
import Stage from './components/Stage';
import Leaderboard from './components/Leaderboard';
import Cheater from './components/Cheater';

export default(
  <Route path="/" component={App}>
    <IndexRoute components={Login}/>
      <Route path="signup" components={SignUp}/>
      <Route path="login" components={Login}/>
      <Route path="main" components={PostsIndex}/>
      <Route path="pokeball" component={Pokeball} />
      <Route path="fightstate" components={FightState} />
      <Route path="monsterbag" components={MonsterBag}/>
      <Route path="stage" components={Stage}/>
      <Route path="leaderboard" components={Leaderboard} />
      <Route path="cheater" components={Cheater}/>
  </Route>
);

//this.props.params.id
