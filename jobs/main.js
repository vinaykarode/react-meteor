import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'

import store from './store'
import {TabNavigator, StackNavigator} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'

const MainNavigator = TabNavigator({
  welcome:{screen:WelcomeScreen},
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
  navigationOptions:{
    tabBarVisible:false
  },
  lazy:true,
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </ Provider>
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
