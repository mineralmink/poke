import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsShow from './components/posts_show';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import Pokeball from './components/Pokeball';
import Login from './components/Login';
import Ma from './component/GoogleMap';

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
