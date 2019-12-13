import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthScreen from './containers/AuthScreen';
import ItemScreen from './containers/ItemScreen';
import RegistrationScreen from './containers/RegistrationScreen';
import * as router from './store/router/reducer';
import * as routerTypes from './store/router/routerConstants';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          {this.getWindow()}
        </div>
    );
  }

  getWindow() {
    console.log(this.props.currentWindow);
    switch (this.props.currentWindow) {
      case routerTypes.REGISTRATION:
        return <RegistrationScreen/>;
      case routerTypes.AUTHORIZATION:
        return <AuthScreen/>;
      case routerTypes.ITEMS:
        return <ItemScreen/>;
      default:
        return <AuthScreen/>;
    }
  }
}

function mapStateToProps(state) {
  return {
    currentWindow: router.getCurrentWindow(state)
  };
}

export default connect(mapStateToProps)(App);
