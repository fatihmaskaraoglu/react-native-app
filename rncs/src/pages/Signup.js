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
  TouchableHighlight,
  AsyncStorage,
  Link,
  ScrollView
} from 'react-native';



export default class Signup extends Component {
  constructor(){
    super();

    this.state = {
      name: "",
      pass: "",
      code: "",

    }
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
                                    name : this.state.name,
                                    pass: this.state.pass,
                                    code: this.state.code,
                                })
                              });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
            //Handle success
            let accessToken = res;
            console.log(accessToken);
            //On success we will store the access_token in the AsyncStorage
            this.storeToken(accessToken);
            this.redirect('home');
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
                 label="3.page"
                 styles={{button: styles.alignRight, label: styles.label}}
                 onPress={this.navigate.bind(this)} />

                 <TextInput
                   onChangeText={ (text)=> this.setState({email: text}) }
                   style={styles.input} placeholder="Name">
                 </TextInput>

                 <TextInput
                   onChangeText={ (text)=> this.setState({password: text}) }
                   style={styles.input}
                   placeholder="Pass"
                   secureTextEntry={true}>
                 </TextInput>

                 <TextInput
                   onChangeText={ (text)=> this.setState({code: text}) }
                   style={styles.input} placeholder="Kayıt Kodu">
                 </TextInput>

         </Container>

         <Container>
         <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
         <Text style={styles.buttonText}>
           KAYIT OL
         </Text>
       </TouchableHighlight>

       <Button2
       label="Giriş yap Sayfasına Dön"
       styles={{button: styles.alignCenter, label: styles.label}}
       onPress={this.gologin.bind(this)} />

        </Container>
        </ScrollView>
      </View>
    );
  }
  navigate(){
    this.props.navigator.push({
      id:'Forapitry',
    });
  }
  gologin(){
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
