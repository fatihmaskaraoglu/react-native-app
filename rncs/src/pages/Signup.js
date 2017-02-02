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
           style={{width: 320, height: 50}}
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
           Gönder
         </Text>
       </TouchableHighlight>
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



import Icon from 'react-native-vector-icons/FontAwesome';
