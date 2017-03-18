import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchThrow } from '../actions/index';
import { Link } from 'react-router';
class Pokeball extends Component {

    handleThrow=(ballType)=>{
         const token = this.props.login.login.token;
        this.props.fetchThrow(ballType,token,this.props.monster.monster.id)
    };

    render(){
        return (
                <div className="text-xs-right">
                    <h3>Monster</h3>
                    <button
                        className="btn-primary"
                        style={{padding:"5px"}}
                        onClick={()=>this.handleThrow('SMALLBALL')}
                    >
                        SMALLBALL
                    </button>
                    <button
                        className="btn-primary"
                        style={{padding:"5px"}}
                        onClick={()=>this.handleThrow('MEDIUMBALL')}
                    >
                        MEDIUMBALL
                    </button>
                    <button
                        className="btn-primary"
                        style={{padding:"5px"}}
                        onClick={()=>this.handleThrow('LARGEBALL')}
                    >
                        LARGEBALL
                    </button>
                    <button
                        className="btn-primary"
                        style={{padding:"5px"}}
                        onClick={()=>this.handleThrow('GIANTBALL')}
                    >
                        GIANTBALL
                    </button>
                </div>
        );
    }
}

function mapStateToProps(state){
    return { monster: state.monster,
             login: state.login };
}

export default connect(mapStateToProps,{ fetchMonster,fetchThrow }) (Pokeball);