import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class Pokeball extends Component {

    render(){
        console.log('wtf')
        return (
                <div className="text-xs-right">
                    <h3>Monster</h3>
                    <button className="btn-primary" style={{padding:"5px"}}>Perfect</button>
                    <button className="btn-primary" style={{padding:"5px"}}>Great</button>
                    <button className="btn-primary" style={{padding:"5px"}}>Curve</button>
                </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all };
}

export default Pokeball;
/**
 * Created by Mineralmink on 4/2/2560.
 */
