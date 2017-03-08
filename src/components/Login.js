/**
 * Created by mineralmink on 2/10/2017 AD.
 */
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { login,createUser,fetchStatus } from '../actions/index';
import { Link } from 'react-router';
class Login extends Component {


    componentDidMount(){
        this.props.fetchStatus();
        console.log('status',this.props.fetchStatus())
    }
    handleLogin(username,hashed_password){
        let usr = document.getElementById('username').value;
        let psd = document.getElementById('password').value;
        this.props.login(usr,psd);
        console.log('s');
    }
    handleUsername(){
        let msg = document.getElementById('username').value;

    }
    handlePassword(){
        let msg = document.getElementById('password').value;
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
                                        <input placeholder="Password" type="text" id='password' onChange={this.handlePassword}  />
                                    </p>
                                    <div className='control'>
                                        <p className='control'>
                                            <small >
                                                <Link to="/" >Forgot Password ?</Link>
                                            </small>
                                        </p>
                                        <p className='control'>
                                            <Link to="/pokeball" className ="btn btn-primary" onClick={() =>this.handleLogin(username,hashed_password)}>
                                                Login
                                            </Link>
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



export default connect(null,{ fetchStatus,login }) (Login);