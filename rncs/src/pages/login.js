import React, { Component } from 'react';
import Container from '../components/Container';
import Button2 from '../components/Button';
import Label from '../components/Label';
import Db from '../../Db.json';
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
  TouchableHighlight,
  AsyncStorage,
  Link,
  props,
  ScrollView
} from 'react-native';
import Signup from './Signup';

const ACCESS_TOKEN = 'access_token';


export default class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
      showProgress: false,
    }
  }

  storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }


  async onLoginPressed() {
      this.setState({showProgress: true})
      try {
        let response = await fetch('http://192.168.1.233:8080/mobile', {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    email: this.state.email,
                                    password: this.state.password,
                                })
                              });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
            //Handle success
            let accessToken = res;
            console.log(accessToken);
            this.storeToken(accessToken);
        } else {
            //Handle error
            let error = res;
            throw error;
        }
      } catch(error) {
          this.setState({error: error});
          console.log("error " + error);
          this.setState({showProgress: false});
      }
    }

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
            <Text>
            HOŞGELDİNİZ!
            </Text>

            <TextInput
              onChangeText={ (text)=> this.setState({email: text}) }
              style={styles.input} placeholder="Email">
            </TextInput>

            <TextInput
              onChangeText={ (text)=> this.setState({password: text}) }
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}>
            </TextInput>

              <Button2
                  label="Şifremi unuttum"
                  styles={{button: styles.alignCenter, label: styles.label}}
                  onPress={this.press.bind(this)} />

            <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>
              Giriş Yap
            </Text>
          </TouchableHighlight>

           </Container>

           <Text style={styles.error}>
             {this.state.error}
           </Text>
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
  alignCenter: {
    alignSelf: 'center'
},
  buttonText: {
   fontSize: 22,
   color: '#008b8b',
   alignSelf: 'center'
 },
 error: {
    color: 'red',
    paddingTop: 10
  },
  input: {
   height: 50,
   marginTop: 10,
   padding: 4,
   fontSize: 18,
   borderWidth: 1,
   borderColor: '#48bbec'
 },
});



import Icon from 'react-native-vector-icons/FontAwesome';
