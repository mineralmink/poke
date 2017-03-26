/* global google */
import React,{Component} from 'react'
import { connect } from 'react-redux';
import { createMove,isTokenExired,relogin } from '../actions/index';
import {getValueFromCookie,saveToCookie } from '../components/Cookie';
import _ from 'underscore';

import {
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


const AccessingArgumentsExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={4}
        defaultCenter={props.center}
        onClick={props.onMapClick}
    >
        {props.markers.map((marker, index) =>
            <Marker position={marker.position} key={index} />
        )}
    </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class AccessingArgumentsExample extends Component {

    constructor() {
        super();
        this.handleRenewToken = _.debounce(this.handleRenewToken, 200);
        this.handleNewCookie = _.debounce(this.handleNewCookie,100);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            // console.log('props',this.props,nextProps)
            // console.log('lat',nextProps.latitude)
            // console.log('f',nextProps.latitude)
            const newLatLng = new google.maps.LatLng(nextProps.latitude,nextProps.longitude);
            this.setState({
                center: newLatLng,
                markers: [
                    ...this.state.markers,
                    {position: newLatLng},
                ],
            });
        }
    }
    state = {
        markers: [],
        center: new google.maps.LatLng(12.811801316582619, 102.41455078125),
    };

    handleMapClick = this.handleMapClick.bind(this);
    // handleAgain=()=>{
    //     const token = getValueFromCookie('tok')
    //     this.props.isTokenExired(token);
    //     this.handleRenewToken();
    // }
    handleMapClick(event) {
         console.log(this.state.center.lat())
         console.log(this.state.center.lng())
        let lat = this.state.center.lat();
        let lng = this.state.center.lng();
        const token = getValueFromCookie('tok')
        console.log('token',token)
        this.props.isTokenExired(token);
        this.handleRenewToken();
        this.props.createMove(lat,lng,token);
        this.setState({
            center: event.latLng,
            markers: [
                ...this.state.markers,
                { position: event.latLng },
            ],
        });
    }
    // handleNewCookie = () =>{
    //     console.log('relogin',this.props.re_login.relogin)
    //     if(!_.isNull(this.props.re_login.relogin)) {
    //         console.log('renewtoken',newtoken)
    //         const newtoken = this.props.re_login.relogin.token;
    //         saveToCookie('tok', newtoken)
    //     }
    // }

    // handleRenewToken = () =>{
    //     const token = getValueFromCookie('tok')
    //     this.props.relogin(token);
    //     //const tokencheck = this.props.tokencheck.token_check;
    //     //if(tokencheck){this.props.relogin(token);}
    //     this.handleNewCookie();
    // }

    handleRenewToken = () =>{
        const token = getValueFromCookie('tok')
        const tokencheck = this.props.tokencheck.token_check;
        console.log('tokenchk',tokencheck)
        if(tokencheck){
            console.log('is token chech')
            this.props.relogin(token);
            const newtoken = this.props.re_login.relogin.token;
            saveToCookie('tok', newtoken)
        }
    }
    render() {
        //console.log(this.props);
        //console.log('state',this.state.center.lat());

        return (
            <AccessingArgumentsExampleGoogleMap
                containerElement={
                    <div className="google-map" />
                }
                mapElement={
                    <div  className="google-map" />
                }
                onMapClick={this.handleMapClick}
                center={this.state.center}
                markers={this.state.markers}
            />
        );
    }
}
function mapStateToProps(state){
    return {
        monster:state.monster,
        stopsigns: state.stopsigns,
        login: state.login,
        tokencheck: state.tokencheck,
        re_login: state.relogin
    };
}
export default connect(mapStateToProps,{ createMove,isTokenExired,relogin }) (AccessingArgumentsExample);