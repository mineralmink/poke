import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import GoogleMap  from '../component/GoogleMap';

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
    renderWeather(lat,lon){
        console.log(lat,lon)
        return(
                <GoogleMapLoader
                    containerElement= { <div style={{height: '100%'}} /> }
                    googleMapElement= {
                        <GoogleMap defaultZoom={12} defaultCenter={{lat: 100.5, lng: 13.2}} />
                    }
                />
        );
    }

    render(){
        const lat = 15.870032;
        const lon = 100.992541;
        return (
            <div>
                <div className="text-xs-right" >
                    <h1>Geolocation</h1>
                    Latitute <input type="number" /> <br/>
                    Longtitute <input  type="number" /><br/>
                    <div>
                        <GoogleMap />
                    </div>
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
                    <div height={'100%'}>
                        ss
                        {/*{this.renderWeather(lat,lon)}*/}

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all};
}

export default connect(mapStateToProps,{ fetchPosts }) (PostsIndex);