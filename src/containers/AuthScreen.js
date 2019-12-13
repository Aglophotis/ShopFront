import React, {Component, useState} from 'react';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';
import * as authActions from '../store/authorization/actions';
import * as routerActions from '../store/router/actions';
import * as routerTypes from '../store/router/routerConstants';

class AuthScreen extends Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            username: '',
            password: ''
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
            this.props.dispatch(routerActions.setWindow(routerTypes.REGISTRATION));
        };

        return (
            <div>
                <button style={{float: 'left', 'marginLeft': '10px'}} onClick={() => signUp()}>Sign up</button>
                <h3>Authorize</h3>
                <input type="text" onChange={this.updateUsername}/>
                <input type="password" onChange={this.updatePassword}/>
                <input type="submit" onClick={this.onAuthSubmit}/>
            </div>
        );
    }

    onAuthSubmit() {
        this.props.dispatch(authActions.authorize(this.state.password, this.state.username));
    }

}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(AuthScreen);
