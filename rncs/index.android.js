import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

class rncs extends Component {

  render() {
    return (
      <Navigator
        initialRoute = {{
          id: 'Login'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
    navigatorRenderScene(route,navigator){
      _navigator = navigator;
        switch (route.id) {
          case 'Login':
            return(
              <Login navigator={navigator} title= "Login"/>
            );
          case 'Signup':
            return(
              <Signup navigator={navigator} title= "Signup"/>
          );
        }
    }
}


AppRegistry.registerComponent('rncs', () => rncs);
