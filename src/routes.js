import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsShow from './container/posts_show';
import App from './components/app';
import PostsIndex from './container/posts_index';
import PostsNew from './container/posts_new';
import Pokeball from './components/Pokeball';
import Login from './components/Login';
import LogOn from './components/LogOn';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
      <Route path="login" components={Login}/>
      <Route path="pokeball" component={Pokeball} />
      <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

//this.props.params.id
