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
  Linking,
  Script,
  loadjs,
  Navigator,
  TextInput
} from 'react-native';

const onButtonPress = () => {
	window.location = 'www.google.com';
};

export default class AwesomeProject extends Component {
	constructor(props) {
    super(props);
    this.state = {text: ''};
	}
	render() {
		return (
		  <View style={styles.container}>
			<Image
			style={{width: 320, height: 100}}
			source={{uri: 'http://www.miksinvest.com/img/miks_black_2.png'}}
			/>
			<Text style={styles.instructions}>
			Henüz hesabınız yok mu? Hemen Kayıt Olun
			</Text>
			<Text style={styles.welcome}>
			Hoşgeldiniz!
			</Text>
			<TextInput
				style={{height: 40},{width: 150 }}
				placeholder="E-mail adresinizi giriniz"
				onChangeText={(text) => this.setState({text})} />
			<TextInput secureTextEntry={true}
				style={{height: 40},{width: 100 }}
				placeholder="Sifrenizi giriniz"
				onChangeText={(text) => this.setState({text})} />
			<Button

				title="Giriş Yap"
				color="#00ced1"
				onPress={onButtonPress}
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
