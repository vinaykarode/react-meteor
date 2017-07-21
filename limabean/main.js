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

import Meteor from 'react-native-meteor';
const limabeanServerUrl ='ws://limabean.io/websocket'
const localHostServerUrl ='ws://localhost:3000/websocket'
// Meteor.connect(serverUrl)

const MainNavigator = TabNavigator({
  // welcome:{screen:WelcomeScreen},
  main:{
    screen:StackNavigator({
      deck:{
        screen:DeckScreen,
        navigationOptions: ({navigation}) => ({
          tabBarVisible: false, 
          headerStyle:{'backgroundColor':'transparent',position: 'absolute',zIndex: 100, top: 0, left: 0, right: 0}
        })
      }, 
      summary:{
        screen:SummaryScreen,
        navigationOptions:({navigation}) => ({
          tabBarVisible: false, 
          headerStyle:{backgroundColor:'transparent',position: 'absolute',zIndex: 100, top: 0, left: 0, right: 0}
        })
      } 
    }),

  },

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
  componentWillMount() {
    Meteor.connect(limabeanServerUrl);  
  }
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
