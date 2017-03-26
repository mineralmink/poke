
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMonsterBag,fetchAiMonster,fetchFight } from '../actions/index';
import { Link } from 'react-router';
import {getValueFromCookie } from '../components/Cookie';
import _ from 'underscore';

class Stage extends Component {

    state ={
        ai_instant_id: null,
        p_instant_id: null,
        isFight:false
    }
    componentWillReceiveProps(nextProps){
        if(!this.props.monsterbag.monsterbag && nextProps.monsterbag.monsterbag){
            this.setState({ p_instant_id: nextProps.monsterbag.monsterbag[0].instant_id})
        }
        if(!this.props.aimonster.aimonster && nextProps.aimonster.aimonster){
            this.setState({ ai_instant_id: nextProps.aimonster.aimonster.instant_id})
        }
    }
    componentDidMount() {
        this.props.fetchAiMonster();
    }
    handleOnChange = () =>{
        console.log('onchange')
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
        this.setState ({
            isFight: !this.state.isFight
        })
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
        // console.log('des',this.props.tokencheck.tokencheck)
        // console.log('monsterbag',this.props.monsterbag);
        console.log('s',this.props.fight)
        const monsterbag = this.props.monsterbag.monsterbag;
        const aimonster = this.props.aimonster.aimonster;
        //console.log(monsterbag)
        return (
            <div>
                {/*<h3>Monster</h3>*/}
                <div className="panel panel-info">
                    <div
                        className="panel-heading"
                        style={{"textAlign":"center"}}
                    >
                         Fight Stage
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        { !_.isNull(monsterbag) &&
                            <div>
                                Choose your Monster : <br/>
                                <select id='selectMonster' onChange={this.handleOnChange}>
                                { this.handleMonsterBag(monsterbag)}
                            </select>
                            </div>
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
                        {
                            !_.isNull(this.props.fight.fight) && this.state.isFight &&
                                <div>
                                Winner :{ this.props.fight.fight ? 'You' : 'Enermy'}
                                </div>
                        }
                    </div>
                </div>
                <div className="col-sm-6">
                    <button onClick={this.handleOnFight} className="btn btn-danger">
                        Fight !
                    </button>
                </div>
                <div
                    className="col-sm-6"
                    style ={{"padding-left":"40%"}}
                >
                    <Link
                        to="/main"
                        className ="btn btn-primary"
                    >
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
            tokencheck: state.tokencheck,
            fight: state.fight
    };
}

export default connect(mapStateToProps,{ fetchMonsterBag,fetchAiMonster,fetchFight }) (Stage);