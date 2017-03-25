import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchStopStation,createMove,fetchMonsterBag,fetchLeaderboard,isTokenExired,relogin } from '../actions/index';
import { Link } from 'react-router';
import GoogleMap from '../component/GoogleMap';


import { saveToCookie, removeCookieWithValue,getValueFromCookie, _COOKIE } from '../components/Cookie';


import _ from 'underscore';

class PostsIndex extends Component {


    constructor() {
        super();
        this.state = {
            latitude: 12.811801316582619,
            longitude: 102.41455078125,
        };
        this.handleRenewToken = _.debounce(this.handleRenewToken, 100);
        this.handleNewCookie = _.debounce(this.handleNewCookie,100);
    }

    handleNewCookie = () =>{
        console.log('relogin',this.props.re_login.relogin.token)
        const newtoken = this.props.re_login.relogin.token;
        saveToCookie('tok',newtoken)
    }
    handleRenewToken = () =>{
        console.log('hjvouhvkgvk')
        const token = getValueFromCookie('tok')
        const tokencheck = this.props.tokencheck.token_check;
        console.log('token',tokencheck)
        if(tokencheck){this.props.relogin(token);}
        this.handleNewCookie();
    }
    handleGeolocation = () => {
        const token = getValueFromCookie('tok')
        this.props.isTokenExired(token);
        this.handleRenewToken();
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
        this.handleRenewToken();
        console.log('tokencheckMonster',tokencheck)
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
        this.handleRenewToken();
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
                    <Link  className ="btn btn-primary" onClick={this.handleMonster}>
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
             re_login: state.relogin
    };
}

export default connect(mapStateToProps,{ fetchMonster,fetchStopStation,createMove,fetchMonsterBag,fetchLeaderboard,isTokenExired,relogin }) (PostsIndex);