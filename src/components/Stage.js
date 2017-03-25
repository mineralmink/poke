
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonsterBag,fetchAiMonster,fetchFight } from '../actions/index';
import { Link } from 'react-router';
import {getValueFromCookie } from '../components/Cookie';
import _ from 'underscore';

class MonsterBag extends Component {

    state ={
        ai_instant_id: null,
        p_instant_id: null,
    }
    componentDidMount() {
        this.props.fetchAiMonster();
    }
    handleOnChange = () =>{
        const mon = document.getElementById('selectMonster').options[document.getElementById("selectMonster").selectedIndex].value;
        console.log(mon);
        this.setState({
            p_instant_id:mon,
            ai_instant_id: this.props.aimonster.aimonster.instant_id
        });
    }
    handleOnFight = () => {
        const p_instant_id = this.state.p_instant_id;
        const ai_instant_id = this.state.ai_instant_id;
        const token = getValueFromCookie('tok')
        this.props.fetchFight(p_instant_id,ai_instant_id,token);
    }
    handleMonsterBag = (monsters) =>{
        return (
                    monsters.map( (monster,i) =>
                        <option key={monster.name} value={monster.instant_id} >
                            {monster.name} power: {monster.power}
                        </option>
                    )
                // <div key={monster.name}
                //     className="panel panel-default"
                //     style={{
                //         "display":"flex",
                //         "width":"50%"
                //     }}
                // >
                //     <div
                //         className="panel-heading"
                //         style={{"textAlign":"center"}}
                //
                //     >
                //         {monster.name}
                //     </div>
                //     <div
                //         className="panel-body"
                //         style={{"textAlign":"center"}}
                //         onClick={this.handleOnClick(monster)}
                //
                //     >
                //         id: {monster.id} <br/>
                //         power: {monster.power}
                //     </div>
                // </div>
        );
    }

    render(){
        console.log('des',this.props.tokencheck.tokencheck)
        console.log('monsterbag',this.props.monsterbag);
        const monsterbag = this.props.monsterbag.monsterbag;
        const aimonster = this.props.aimonster.aimonster;
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
                            <select id='selectMonster' onChange={this.handleOnChange}>
                                { this.handleMonsterBag(monsterbag)}
                            </select>
                        }
                        { !_.isNull(aimonster) &&
                            <div
                                className="panel panel-default"

                            >
                                <div
                                    className="panel-heading"
                                    style={{"textAlign": "center"}}

                                >
                                    ENERMY'S MONSTER :
                                    {aimonster.name}
                                </div>
                                <div
                                    className="panel-body"
                                    style={{"textAlign": "center"}}
                                >
                                    id: {aimonster.id} <br/>
                                    power: {aimonster.power}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <button onClick={this.handleOnFight} className="btn btn-danger">
                    Fight !
                </button>
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
            monsterbag: state.monsterbag,
            aimonster: state.aimonster,
            tokencheck: state.tokencheck};
}

export default connect(mapStateToProps,{ fetchMonsterBag,fetchAiMonster,fetchFight }) (MonsterBag);