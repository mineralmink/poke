
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {getValueFromCookie } from '../components/Cookie';
import _ from 'underscore';

class Cheater extends Component {


    render(){
        return (
            <div>
                {/*<h3>Monster</h3>*/}
                <div className="panel panel-info">
                    <div
                        className="panel-heading"
                        style={{"textAlign":"center"}}
                    >
                        Cheating Detector
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        <h1>
                        You have been temporary ban.
                        </h1>
                    </div>
                </div>
                {/*<div*/}
                    {/*className="col-sm-6"*/}
                    {/*style ={{"padding-left":"40%"}}*/}
                {/*>*/}
                    {/*<Link*/}
                        {/*to="/main"*/}
                        {/*className ="btn btn-primary"*/}
                    {/*>*/}
                        {/*Main*/}
                    {/*</Link>*/}
                {/*</div>*/}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        login: state.login
    };
}

export default connect(mapStateToProps,{ }) (Cheater);