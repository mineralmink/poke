
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Leaderboard extends Component {

    //
    // handleAvatar = (avatar) =>{
    // return (
    //     <div key={avatar.name}
    //          className="panel panel-default"
    //          style={{
    //              "display":"flex",
    //              "width":"50%"
    //          }}
    //     >
    //
    //         <div
    //             className="panel-body"
    //         >
    //             <div className="row">
    //             <div className="col-sm-4" style={{"textAlign":"left"}}>
    //                 {avatar.username}
    //                 </div>
    //                 <div className="col-sm-4" style={{"textAlign":"right"}}>
    //                 {avatar.score}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     )
   // }

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
                        Leaderboard
                    </div>
                    <div
                        className="panel-body"
                        style={{"textAlign":"center"}}
                    >
                        { leaderboard &&
                                <table className="table-fill">
                                    <thead>
                                    <tr>
                                        <th className="text-left">Avatar Name</th>
                                        <th className="text-left">Score</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-hover">
                                         {
                                            leaderboard.map( avatar =>
                                                <tr>
                                                    <td className="text-left">{avatar.username}</td>
                                                    <td className="text-left">{avatar.score}</td>
                                                </tr>
                                        )}
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
                <div style ={{"padding-left":"80%"}}>
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
    return { leaderboard:state.leaderboard};
}

export default connect(mapStateToProps,{ }) (Leaderboard);
