/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TextInput
} from 'react-native';


export default class AwesomeProject extends Component {
	constructor(props) {
    super(props);
    this.state = {text: ''};
	}
	render() {
		return (
		  <View style={styles.container}> 	
			<Image
			style={{width: 300, height: 120}}
			source={{uri: 'http://www.miksinvest.com/img/miks_black_2.png'}}
			/>
		  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

