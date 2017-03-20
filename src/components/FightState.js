import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchThrow } from '../actions/index';
import { Link } from 'react-router';
class FightState extends Component {



    render(){
        if(!this.props.loginResponse.login){
            browserHistory.push('/login');
        }
        return (
            <div>
                {/*<h3>Monster</h3>*/}
                <div className="panel panel-info">
                    <div
                        className="panel-heading"
                        style={{"textAlign":"center"}}
                    >
                        Fight State
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        <div
                            className="panel panel-default"
                            style={{
                                "width":"50%"
                            }}
                        >
                            <div
                                className="panel-heading"
                                style={{"textAlign":"center"}}
                            >
                                Avatar
                            </div>
                            <div
                                className="panel-body"
                                style={{"textAlign":"center"}}
                            >
                                some content
                            </div>
                        </div>
                        <div
                            className="panel panel-default"
                            style={{
                                "width":"50%"
                            }}
                        >
                            <div
                                className="panel-heading"
                                style={{"textAlign":"center"}}
                            >
                               Enermy
                            </div>
                            <div
                                className="panel-body"
                                style={{"textAlign":"center"}}
                            >
                                some content
                            </div>
                        </div>
                        Winner :
                    </div>
                </div>
                <div>
                    <Link to="/main" className ="btn btn-primary">
                        Main
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
            login: state.login };
}

export default connect(mapStateToProps,{ fetchMonster,fetchThrow }) (FightState);