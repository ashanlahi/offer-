
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import React, { Component} from 'react';
 
class home extends Component {
 
constructor() {
 
    super()
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: ''
 
    }
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http://10.10.6.181/user_project/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      name: this.state.UserName,
  
      email: this.state.UserEmail,
  
      password: this.state.UserPassword
  
    })
    
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
          
  
        }).catch((error) => {
          console.error(error);
        });
}
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.title}>supplier Registration Form</Text>
  
        <TextInput
          placeholder="Enter User Name"
          onChangeText={name => this.setState({UserName : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
             
 
        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#1c313a" />
      
  
 
</View>
            
    );
  }
}
export default home;
 
const styles = StyleSheet.create({
 
MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 10
},
btn1: {
  backgroundColor: '#1c313a',
  width: 200,
  borderRadius: 25,
  height: 40,
  marginVertical: 20,
}, 
TextInputStyleClass: {
 
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#1c313a',
  borderRadius: 5 ,
},
 
title:{
 
  fontSize: 22, 
  color: "#1c313a", 
  textAlign: 'center', 
  marginBottom: 15
}
 
});
