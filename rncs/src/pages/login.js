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
  Navigator,
  Link,
  props,
  ScrollView
} from 'react-native';
import Signup from './Signup';


export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scroll}>
        <Image
           style={{width: 320, height: 100}}
           source={{uri: 'http://www.miksinvest.com/img/miks_black_2.png'}}
         />
          <Container>
              <Button2
                  label="Henüz hesabınız yok mu? Hemen Kayıt Olun."
                  styles={{button: styles.alignRight, label: styles.label}}
                  onPress={this.navigate.bind(this)} />
          </Container>
          <Container>
            <Label text="E-posta adresi" />
            <TextInput
                style={styles.textInput}
          />
          </Container>
          <Container>
              <Label text="Şifre" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
              />
          </Container>
          <Container>
              <Button2
                  label="Şifremi unuttum"
                  styles={{button: styles.alignRight, label: styles.label}}
                  onPress={this.press.bind(this)} />
          </Container>
            <Container>
          <Button
              onPress={this.homepage.bind(this)}
              title="Giriş Yap"
              color="#00ffff"
           />
           </Container>
          <Text> "miks" </Text>
        </ScrollView>
      </View>
    );
  }
  navigate(){
    this.props.navigator.push({
      id:'Signup',
    });
  }
  press() {

  }
  homepage(){

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
