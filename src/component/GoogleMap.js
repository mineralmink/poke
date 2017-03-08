/* global google */
import React,{Component} from 'react'
import { connect } from 'react-redux';
import { fetchStopStation } from '../actions/index';
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

    state = {
        markers: [],
        center: new google.maps.LatLng(-25.363882, 131.044922),
    };

    handleMapClick = this.handleMapClick.bind(this);
    
    handleMapClick(event) {
       console.log(this.state.center.lat())
        console.log(this.state.center.lng())
        let lat = this.state.center.lat();
        let lng = this.state.center.lng();
        this.props.fetchStopStation(lat,lng);
        this.setState({
            center: event.latLng,
            markers: [
                ...this.state.markers,
                { position: event.latLng },
            ],
        });
    }

    render() {
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

export default connect(null,{ fetchStopStation }) (AccessingArgumentsExample);