import Expo from 'expo';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';


import {TabNavigator, StackNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import SummaryScreen from './screens/SummaryScreen';
import AuthScreen from './screens/AuthScreen';

const MainNavigator = TabNavigator({
  deck:{screen:DeckScreen},
  summary:{screen:SummaryScreen},
  // main:{
  //   screen:TabNavigator({
  //     deck:{screen:DeckScreen},
  //     summary:{screen:SummaryScreen},
  //   })
  // }
},{
  lazy:true,
})

class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
