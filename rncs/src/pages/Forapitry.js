import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Press,
  Alert,
  Button,
  Image,
  Linking,
  navigator,
  Link,
  ScrollView
} from 'react-native';


import apitry from './Apitry';

export default class Forapitry extends Component {
  constructor(props){
    super(props);
    this.state = {
      rovers: [],
      roverName:''
    }
  }

  componentWillMount(){
    apitry.getRovers().then((res) =>{
      this.setState({
        rovers: res.rovers,
        roverName:res.rovers[0].name,
        roverName2:res.rovers[1].name
      })
    });
  }

  render() {
    console.log("Rovers:", this.state.rovers);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Rovers!
        </Text>
        <Text style={styles.instructions}>
          Rover : {this.state.roverName}
        </Text>
        <Text style={styles.instructions}>
          Rover2 : {this.state.roverName2}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  scroll: {
      flex :1,
      backgroundColor: '#ffffff',
      padding: 30,
      flexDirection: 'column'
  },
    label: {
      color: '#0d8898',
      fontSize: 20
  },
    alignRight: {
      alignSelf: 'flex-end'
  },
});
