import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchStopStation,createMove,fetchMonsterBag,fetchLeaderboard,isTokenExired,relogin } from '../actions/index';
import { Link } from 'react-router';
import GoogleMap from '../component/GoogleMap';

import { saveToCookie, removeCookieWithValue,getValueFromCookie, _COOKIE } from '../components/Cookie';


import _ from 'underscore';

class PostsIndex extends Component {

    state = {
        latitude: 12.811801316582619,
        longitude: 102.41455078125,
    };
    componentWillMount() {
       // console.log('tokeAczn',getValueFromCookie('tok'));
        // const token = getValueFromCookie('tok')
        // this.props.isTokenExired(token);
        // const tokencheck = this.props.tokencheck.token_check;
        // if(tokencheck){this.props.relogin(token);}
    }


    handleGeolocation = () => {
        const token = getValueFromCookie('tok')
        this.props.isTokenExired(token);
        const tokencheck = this.props.tokencheck.token_check;
        if(tokencheck){this.props.relogin(token);}
        const lat = +document.getElementById('latitude').value;
        const lon = +document.getElementById('longitude').value;
        this.props.createMove(lat,lon,token);
        this.setState({ latitude: lat,
                        longitude: lon
        });
    }

    handleMonster= () =>{
        const token = getValueFromCookie('tok')
        this.props.isTokenExired(token);
        const tokencheck = this.props.tokencheck.token_check;
        console.log('tokencheckMonster',tokencheck)
        if(tokencheck){this.props.relogin(token);}
        //console.log('monster',this.state)
        const random = Math.random();
        //console.log('token',token);
        // if(random>0.5) {
        //     this.props.fetchMonster(this.state.latitude, this.state.longitude, token)
        // }
        this.props.fetchMonster(this.state.latitude, this.state.longitude, token)
    }
    getLat=(lat,lng) =>{
        this.setState({
            latitude: lat,
            longitude: lng
        })
    };
 
    handleMonsterBag = () =>{
        const token = getValueFromCookie('tok')
        this.props.isTokenExired(token);
        const tokencheck = this.props.tokencheck.token_check;
        if(tokencheck){this.props.relogin(token);}
        this.props.fetchMonsterBag(token);
    }
    handleLeaderboard = () =>{
        this.props.fetchLeaderboard();
    }
    handleLogout = () =>{
        removeCookieWithValue('tok');
    }
    render(){
        //console.log(this.props.login,_.isNull(this.props.login.login) ? 'esad': this.props.login.login.token)
        const {latitude,longitude} = this.state
        console.log('tokencheck',this.props.tokencheck.token_check)
        return (
            <div>
                <div className="text-xs-right" >
                    <h1>Geolocation</h1>
                    Latitute <input type="number" id="latitude" placeholder={latitude}/> <br/>
                    Longtitute <input  type="number" id="longitude" placeholder={longitude} /><br/>
                    <button className="btn btn-primary" onClick={this.handleGeolocation}>Submit</button>
                    <div>
                        <GoogleMap
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        getLatitude={this.getLat}
                        token={_.isNull(this.props.login.login) ? '': this.props.login.login.token}
                        />
                    </div>
                    <Link to="pokeball" className ="btn btn-primary" onClick={this.handleMonster}>
                        Monster
                    </Link>

                    {/*<button className="btn btn-primary" onClick={this.handleMonsterBag}>Monster Bag</button><br/>*/}
                    <Link to="monsterbag" className="btn btn-primary" onClick={this.handleMonsterBag}>
                        Monster Bag
                    </Link>
                    <Link to="stage" className ="btn btn-primary" onClick={this.handleMonsterBag}>
                        Fight Stage
                    </Link>
                    <Link to="leaderboard" className="btn btn-primary" onClick={this.handleLeaderboard}>
                        Leaderboard
                    </Link>
                    { this.props.stopsigns.stopsigns &&
                        [
                            //console.log(this.props.stopsigns)
                            <p>{this.props.stopsigns.stopsigns[0].name}</p>
                        ]
                    }
                    <Link to="login" className ="btn btn-primary" onClick={this.handleLogout}>
                        Logout
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
             monster:state.monster,
             stopsigns: state.stopsigns,
             login: state.login,
             monsterbag: state.monsterbag,
             tokencheck: state.tokencheck,
             relogin: state.relogin
    };
}

export default connect(mapStateToProps,{ fetchMonster,fetchStopStation,createMove,fetchMonsterBag,fetchLeaderboard,isTokenExired,relogin }) (PostsIndex);