/**
 * Created by mineralmink on 2/10/2017 AD.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class Login extends Component {

    render(){
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
                                        <input placeholder="Username" type="text"/>
                                    </p>
                                    <p className='control'>
                                        <input placeholder="Password"
                                               type="text"/>
                                    </p>
                                    <div className='control'>
                                        <p className='control'>
                                            <small >
                                                <Link to="/" >Forgot Password ?</Link>
                                            </small>
                                        </p>
                                        <p className='control'>
                                            <Link to="/" className ="btn btn-primary">
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


export default Login;
/**
 * Created by Mineralmink on 4/2/2560.
 */
