import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonster,fetchThrow } from '../actions/index';
import { Link } from 'react-router';
import { getValueFromCookie } from '../components/Cookie';

class Pokeball extends Component {

    state = {
        isThrow:false
    };
    handleThrow=(ballType)=>{
        const token = getValueFromCookie('tok')
        this.props.fetchThrow(ballType,token,this.props.monster.monster.instant_id)
        this.setState({
            isThrow: !this.state.isThrow
        })
    };

    render(){
        console.log(this.props.throw)
        return (
                <div>
                    {/*<h3>Monster</h3>*/}
                    <div className="panel panel-info">
                        <div
                            className="panel-heading"
                            style={{"textAlign":"center"}}
                        >
                            Monster
                        </div>
                        <div
                            className="panel-body"
                            style={{"textAlign":"center"}}
                        >
                            { this.props.monster.monster &&
                                <h1>
                                    ID {this.props.monster.monster.id} <br/>
                                    NAME {this.props.monster.monster.name}
                                </h1>
                            }
                            { this.props.throw.throw && this.state.isThrow &&
                                <h3>
                                    BALL : {this.props.throw.throw.ball} <br/>
                                    CATCHED : {this.props.throw.throw.catched.toString()} <br/>
                                    MONSTER ID: {this.props.throw.throw.monster.id} <br/>
                                </h3>
                            }
                        </div>
                    </div>
                    <div>
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
    return { monster: state.monster,
             login: state.login,
             throw: state.throw };
}

export default connect(mapStateToProps,{ fetchMonster,fetchThrow }) (Pokeball);