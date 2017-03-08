import React, { Component,PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createUser,fetchStatus } from '../actions/index';
import { Link } from 'react-router';

class LogOn extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
    onSubmit(props) {
        this.props.createUser(props)
        this.props.fetchStatus()
            .then(()=>{
                //blog created, navigate to indexusing push
                this.context.router.push('/pokeball');
            });
    }
    render(){
        const { fields:{ username,hashed_password }, handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3> Create A New Post</h3>
                <div className={ `form-group ${username.touched && username.invalid ? 'has-danger':''}` }>
                    <label>Username</label>
                    <input type="text" className="form-control" {...username} />
                    <div className="text-help">
                        {username.touched ? username.error : ''}
                    </div>
                </div>

                <div className={ `form-group ${hashed_password.touched && hashed_password.invalid ? 'has-danger':''}` }>
                    <label>Password</label>
                    <input type="text" className="form-control" {...hashed_password} />
                    <div className="text-help">
                        {hashed_password.touched ? hashed_password.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors ={};
    if(!values.username){
        errors.username = 'Enter a user name';
    }
    if(!values.hashed_password){
        errors.hashed_password = 'Enter a categories';
    }
    return errors;
}


//connect:first arg mapStateToProps and mapDispatchToProps
//reduxForm: 1.config 2.mapStateToProps 3.mapDispatchToProps
export default reduxForm({
    form: 'LogOnForm',
    fields: ['username', 'hashed_password'],
    validate
},null,{ createUser,fetchStatus }) (LogOn);
/**
 * Created by mineralmink on 3/7/2017 AD.
 */
