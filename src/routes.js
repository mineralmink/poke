import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './container/posts_index';
import Pokeball from './components/Pokeball';
import Login from './components/Login';
import FightState from './components/FightState';
export default(
  <Route path="/" component={App}>
    <IndexRoute />
      <Route path="login" components={Login}/>
      <Route path="main" components={PostsIndex}/>
      <Route path="pokeball" component={Pokeball} />
      <Route path="fightstate" components={FightState} />
  </Route>
);

//this.props.params.id
