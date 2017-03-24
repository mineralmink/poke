
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'underscore';
import cookie from 'react-cookie';

class Leaderboard extends Component {


    componentDidMount(){
        this.state =  { blah: cookie.load('blah'),
                        token: cookie.load('token')};
    }

    handleAvatar = (avatar) =>{
    return (
        <div key={avatar.name}
             className="panel panel-default"
             style={{
                 "display":"flex",
                 "width":"50%"
             }}
        >

            <div
                className="panel-body"
            >
                <p
                    style={{"float":"left"}}
                >

                    {avatar.username}
                </p>
                <p
                    style={{"float":"right"}}
                >
                    {avatar.score}
                </p>
            </div>
        </div>
        )
    }

    render(){
        const leaderboard = this.props.leaderboard.leaderboard;
        console.log(leaderboard)
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
                        { leaderboard &&
                            [
                                leaderboard.map( avatar =>
                                    this.handleAvatar(avatar)
                                )
                            ]

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
    return { leaderboard:state.leaderboard};
}

export default connect(mapStateToProps,{ }) (Leaderboard);
