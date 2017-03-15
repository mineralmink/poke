import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts,fetchMonster } from '../actions/index';
import { Link } from 'react-router';
import GoogleMap  from '../component/GoogleMap';

class PostsIndex extends Component {

    state = {
        latitude: null,
        longitude: null
    };
    componentWillMount(){
        this.props.fetchPosts();
        console.log('hello',this.props.fetchPosts())
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

    handleGeolocation = () => {
        const lat = +document.getElementById('latitude').value;
        const lon = +document.getElementById('longitude').value;
        this.setState({ latitude: lat,
                        longitude: lon });
    }

    handleMonster= () =>{
        console.log('monster',this.state)
        this.props.fetchMonster(this.state.latitude,this.state.longitude)
    }

    render(){
        return (
            <div>
                <div className="text-xs-right" >
                    <h1>Geolocation</h1>
                    Latitute <input type="number" id="latitude"/> <br/>
                    Longtitute <input  type="number" id="longitude"/><br/>
                    <button className="btn btn-primary" onClick={this.handleGeolocation}>Submit</button>
                    <div>
                        <GoogleMap
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}/>
                    </div>
                    <Link to="pokeball" className ="btn btn-primary" onClick={this.handleMonster}>
                        Monster
                    </Link>
                    <button className="btn btn-primary" >Pokestop</button><br/>
                    <output className="output"> Output...</output><br/>
                    Speed <input type="number" />
                    <Link to="posts/new" className ="btn btn-primary">
                    Add d
                    </Link>
                    <h3>Posts</h3>
                    <ul className="list-group">
                    {this.renderPosts()}
                    </ul>

                    <Link to="login" className ="btn btn-primary">
                        Logout
                    </Link>
                    <div height={'100%'}>
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

export default connect(mapStateToProps,{ fetchPosts,fetchMonster }) (PostsIndex);