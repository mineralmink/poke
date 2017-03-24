/**
 * Created by mineralmink on 3/22/2017 AD.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonsterBag } from '../actions/index';
import { Link } from 'react-router';
import _ from 'underscore';
import cookie from 'react-cookie';

class MonsterBag extends Component {

    componentDidMount(){
        this.state =  { blah: cookie.load('blah'),
            token: cookie.load('token')};
    }

    handleMonsterBag = (monster) =>{
        return (

                <div key={monster.name}
                    className="panel panel-default"
                    style={{
                        "display":"flex",
                        "width":"50%"
                    }}
                >
                    <div
                        className="panel-heading"
                        style={{"textAlign":"center"}}
                    >
                        {monster.name}
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        id: {monster.id} <br/>
                        power: {monster.power}
                    </div>
                </div>
        );
    }
    render(){
        console.log('monsterbag',this.props.monsterbag);
        const monsterbag = this.props.monsterbag.monsterbag;
        console.log(monsterbag)
        return (
            <div>
                {/*<h3>Monster</h3>*/}
                <div className="panel panel-info">
                    <div
                        className="panel-heading"
                        style={{"textAlign":"center"}}
                    >
                        Monster Bag
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        { !_.isNull(monsterbag) &&
                            monsterbag.map( monster =>
                                //console.log(monster)
                                this.handleMonsterBag(monster)
                        )
                        }
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
    return {login: state.login,
            monsterbag: state.monsterbag};
}

export default connect(mapStateToProps,{ fetchMonsterBag }) (MonsterBag);