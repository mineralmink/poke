/**
 * Created by mineralmink on 2/10/2017 AD.
 */
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup,fetchStatus } from '../actions/index';
import { Link } from 'react-router';
import _ from 'underscore';
import {browserHistory} from 'react-router';
import cookie from 'react-cookie';

class SignUp extends Component {

    state = {
        loginStatus: true
    }

    handleLogin(){
        let usr = document.getElementById('username').value;
        let psd = document.getElementById('password').value;
        let avr = document.getElementById('avatarName').value;

        if(usr&&psd&&avr) {
            // for(let i=0;i<60;i++)
            // {
            //     this.props.login(usr, psd);
            // }
            this.props.signup(usr, psd, avr);
            browserHistory.push('/login');
            // if(!_.isNull(this.props.loginResponse.login)){
            //     console.log('login',this.props.loginResponse.login.successful)
            //     browserHistory.push('/main');
            // }

        }
        else {
            this.setState({
                loginStatus: false
            })
        }

    }

    render(){
        const {username,hashed_password} = this.props;
        return (
            <section className="text-xs-right">
                <div >
                    <div className='container'>
                        <div className='columns'>
                            <div className='column'>
                                <h1 className='title'>
                                    SignUp
                                </h1>
                                <div className='login-form'>
                                    <p className='control'>
                                        <input placeholder="Username" type="text" id="username" />
                                    </p>
                                    <p className='control'>
                                        <input placeholder="Password" type="text" id='password' />
                                    </p>
                                    <p className='control'>
                                        <input placeholder="Avatar name" type="text" id='avatarName' />
                                    </p>
                                    <div className='control'>
                                        <p className='control'>
                                            <small >
                                                <Link to="/main" >Forgot Password ?</Link> already signup!
                                                <Link to="/login" > Login</Link>
                                            </small>
                                        </p>
                                        <p className='control'>
                                            {/*<Link to="/" className ="btn btn-primary" onClick={() =>this.handleLogin(username,hashed_password)}>*/}
                                            {/*Login*/}
                                            {/*</Link>*/}
                                            {!this.state.loginStatus &&
                                            [
                                                <p className="text-warning">Login Error</p>
                                            ]
                                            }
                                            <button  className ="btn btn-primary" onClick={() =>this.handleLogin(username,hashed_password)}>
                                                SignUp
                                            </button>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


function mapStateToProps(state){
    return { loginResponse: state.login }
};


export default connect(mapStateToProps,{ fetchStatus,signup }) (SignUp);