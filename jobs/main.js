import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'

const MainNavigator = TabNavigator({
  welcome:{screen:ReviewScreen},
  auth:{screen:AuthScreen},
  main:{
    screen:TabNavigator({
      map:{screen:MapScreen},
      deck:{screen:DeckScreen},
      review:{
        screen:StackNavigator({
          review:{screen:ReviewScreen},
          settings:{screen:SettingsScreen}
        })
      }
    })
  }
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
