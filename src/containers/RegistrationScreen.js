import React, {Component, useState} from 'react';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';
import * as registrationActions from '../store/registration/actions';
import * as routerActions from '../store/router/actions';
import * as routerTypes from '../store/router/routerConstants';

class RegistrationScreen extends Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            username: '',
            password: '',
            rPassword: ''
        }
    }

    updateUsername(event) {
        this.setState({username: event.target.value})
    }

    updatePassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        const signUp = () => {
            this.props.dispatch(routerActions.setWindow(routerTypes.AUTHORIZATION));
        };

        return (
            <div>
                <button style={{float: 'left', 'marginLeft': '10px'}} onClick={() => signUp()}>Sign in</button>
                <h3>Registration</h3>
                <input type="text" onChange={this.updateUsername}/>
                <input type="password" onChange={this.updatePassword}/>
                <input type="submit" onClick={this.onAuthSubmit}/>
            </div>
        );
    }

    onAuthSubmit() {
        this.props.dispatch(registrationActions.registration(this.state.username, this.state.password));
    }

}

function mapStateToProps(state) {
    return {
        authorized: state.authorized
    };
}

export default connect(mapStateToProps)(RegistrationScreen);
