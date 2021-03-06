/**
 * Created by mineralmink on 2/10/2017 AD.
 */
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { login,fetchStatus } from '../actions/index';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import _ from 'underscore';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginFail: false
        }
        this.handlePushMain = _.debounce(this.handlePushMain, 500);
    }
    componentWillReceiveProps(nextProps){
            if(nextProps.loginResponse.loginFail){
                this.setState({
                    loginFail: true
                })
            }
    }
    handlePushMain(){
        if(!this.props.loginResponse.loginFail){
            if(!_.isNull(this.props.loginResponse.login.cheater)){
                browserHistory.push('/cheater');
            }
            else {
                browserHistory.push('/main');
            }
        }

    }
    handleLogin(){
        let usr = document.getElementById('username').value;
        let psd = document.getElementById('password').value;
        if(usr&&psd) {
            // for(let i=0;i<60;i++)
            // {
            //     this.props.login(usr, psd);
            // }
            this.props.login(usr, psd);
            //console.log('thisprops',this.props.loginStatus)
            //browserHistory.push('/main');
            this.handlePushMain()

        }
        else {
            this.setState({
                loginFail: true
            })
        }
        console.log(this.props.loginResponse.loginFail)
        if(this.props.loginResponse.login){
            browserHistory.push('/login');

        }
    }
    handleCheatLogin(){
        let usr = document.getElementById('username').value;
        let psd = document.getElementById('password').value;
        if(usr&&psd) {
            for(let i=0;i<60;i++)
            {
                this.props.login(usr, psd);
            }
        }
        else {
            this.setState({
                loginFail: true
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
                                    Login
                                </h1>
                                <div className='login-form'>
                                    <p className='control'>
                                        <input placeholder="Username" type="text" id="username" onChange={this.handleUsername} />
                                    </p>
                                    <p className='control'>
                                        <input placeholder="Password" type="password" id='password' onChange={this.handlePassword}  />
                                    </p>

                                    <div className='control'>
                                        <p className='control'>
                                            <small >
                                                <Link to="/main" >Forgot Password ?</Link> or <Link to="/signup" > Sign up</Link>
                                            </small>
                                        </p>
                                        <p className='control'>
                                            {/*<Link to="/" className ="btn btn-primary" onClick={() =>this.handleLogin(username,hashed_password)}>*/}
                                                {/*Login*/}
                                            {/*</Link>*/}
                                            {this.state.loginFail &&
                                                [
                                                    <p className="text-warning">Login Error</p>
                                                ]
                                            }
                                            {
                                                !_.isNull((this.props.loginResponse.errorMessage)) && this.state.loginFail &&
                                                <p className="text-warning">
                                                    {
                                                        //this.props.loginResponse.errorMessage
                                                    }
                                                </p>


                                            }
                                            <button  className ="btn btn-danger" onClick={() =>this.handleCheatLogin(username,hashed_password)}>
                                                Cheat
                                            </button>
                                            <b />
                                            <button  className ="btn btn-primary" onClick={() =>this.handleLogin(username,hashed_password)}>
                                                Login
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
        return { loginResponse: state.login}
};


export default connect(mapStateToProps,{ fetchStatus,login }) (Login);
