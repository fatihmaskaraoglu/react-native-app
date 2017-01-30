import React, { Component } from 'react';
import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';
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



export default class Signup extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scroll}>
        <Image
           style={{width: 320, height: 50}}
           source={{uri: 'https://drive.google.com/file/d/0B8Qn9aoKG8GfTGR4eE44N1RpdnM/view?usp=sharing'}}
         />
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  scroll: {
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



import Icon from 'react-native-vector-icons/FontAwesome';
