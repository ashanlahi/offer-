
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import fristScreen from './screen/FristScreen'
import home from './screen/home'
import Signin from './screen/Signin'
import suppro from './screen/suppro'



export default class App extends Component {
  render() {
    return (
     <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator ({
  login:fristScreen,
  home:home,
  Signin:Signin,
  suppro:suppro
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
