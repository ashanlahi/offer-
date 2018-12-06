import React, { Component } from 'react';
import { StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from 'react-native';


class HomeScreen extends Component {
  static navigationOptions =
  {
    header: null,
  };
  render() {
    return (
      
    <View style={styles.container}>
        <Text  style={styles.head}>Offerme</Text>
            
        <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Signin')}>
            <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('home')}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>  
    </View> 
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
    
  },
  head:{
    fontFamily: 'Lobster-Regular',
    fontSize: 50,
    color: '#191970',
  

  },
  btn1: {
    backgroundColor: '#1c313a',
    width: 200,
    borderRadius: 25,
    height: 40,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical:8,
  },
});
