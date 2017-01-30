import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/login2';

export default class AwesomeProject extends Component {

  render() {
    return (
        <Login/>
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
