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
           source={{uri: 'http://www.miksinvest.com/img/miks_black_2.png'}}
         />
         <Container>
             <Button2
                 label="Login sayfasına dön"
                 styles={{button: styles.alignRight, label: styles.label}}
                 onPress={this.navigate.bind(this)} />
         </Container>
        </ScrollView>
      </View>
    );
  }
  navigate(){
    this.props.navigator.push({
      id:'Login',
    });
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
