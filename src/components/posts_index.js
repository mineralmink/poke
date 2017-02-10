import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
    console.log('hello')
    //will call in first time?
  }
  renderPosts(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/"+post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      )
    });
  }
  render(){
    return (
      <div>
        <div className="text-xs-right" >
            <h1>Geolocation</h1>
            Latitute <input type="number" /> <br/>
            Longtitute <input  type="number" /><br/>
            <Link to="posts/pokeball" className ="btn btn-primary">
                Monster
            </Link>
            <button className="btn btn-primary" >Pokestop</button><br/>
            <output className="output"> Output...</output><br/>
            Speed <input type="number" />
          {/*<Link to="posts/new" className ="btn btn-primary">*/}
            {/*Add d*/}
          {/*</Link>*/}
        {/*<h3>Posts</h3>*/}
        {/*<ul className="list-group">*/}
          {/*{this.renderPosts()}*/}
        {/*</ul>*/}
            {/*<div className="arrow-up"></div>*/}
            {/*<div className="arrow-down"></div>*/}
            {/*<div className="arrow-left"></div>*/}
            {/*<div className="arrow-right"></div>*/}
          <div className="all-arrow">
              <a className="up-arrow"> </a>
              <a className="right-arrow"> </a>
              <a className="left-arrow"> </a>
              <a className="down-arrow"> </a>
          </div>
          <Link to="login" className ="btn btn-primary">
              Logout
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all};
}

export default connect(mapStateToProps,{ fetchPosts }) (PostsIndex);
