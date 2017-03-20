import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchStopStation,createMove } from '../actions/index';
import { Link } from 'react-router';
import GoogleMap from '../component/GoogleMap';

import _ from 'underscore';

class PostsIndex extends Component {

    state = {
        latitude: 12.811801316582619,
        longitude: 102.41455078125,
    };

    handleGeolocation = () => {
        const token = this.props.login.login.token;
        const lat = +document.getElementById('latitude').value;
        const lon = +document.getElementById('longitude').value;
        this.props.createMove(lat,lon,token);
        this.setState({ latitude: lat,
                        longitude: lon
        });
    }

    handleMonster= () =>{
        //console.log('monster',this.state)
        const token = this.props.login.login.token;
        //console.log('token',token);
        this.props.fetchMonster(this.state.latitude,this.state.longitude,token)
    }
    getLat=(lat,lng) =>{
        this.setState({
            latitude: lat,
            longitude: lng
        })
    };
    handleStopSign = ()=>{
        const token = this.props.login.login.token;
        this.props.fetchStopStation(this.state.latitude,this.state.longitude,token)
    }
    render(){

        //console.log(this.props.login,_.isNull(this.props.login.login) ? 'esad': this.props.login.login.token)
        const {latitude,longitude} = this.state
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
                    <button className="btn btn-primary" onClick={this.handleStopSign}>Stop Station</button><br/>
                    <Link to="fightstate" className ="btn btn-primary" >
                        Fight State
                    </Link>
                    { this.props.stopsigns.stopsigns &&
                        [
                            //console.log(this.props.stopsigns)
                            <p>{this.props.stopsigns.stopsigns[0].name}</p>
                        ]
                    }
                    <Link to="login" className ="btn btn-primary">
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
             login: state.login };
}

export default connect(mapStateToProps,{ fetchMonster,fetchStopStation,createMove }) (PostsIndex);