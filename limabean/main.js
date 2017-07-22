import Expo from 'expo';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import {Provider} from "react-redux"
import {TabNavigator, StackNavigator} from 'react-navigation'
import Meteor from 'react-native-meteor';

import store from './store'
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import SummaryScreen from './screens/SummaryScreen';
import AuthScreen from './screens/AuthScreen';

const limabeanServerUrl ='ws://limabean.io/websocket'
const localHostServerUrl ='ws://localhost:3000/websocket'

const MainNavigator = TabNavigator({
  main:{
    screen:StackNavigator({
      deck:{
        screen:DeckScreen,
        navigationOptions: ({navigation}) => ({
          tabBarVisible: false, 
          headerTintColor: 'white',
          headerStyle:{'backgroundColor':'transparent',position: 'absolute',zIndex: 100, top: 0, left: 0, right: 0}
        })
      }, 
      summary:{
        screen:SummaryScreen,
        navigationOptions:({navigation}) => ({
          tabBarVisible: false, 
          headerTintColor: 'white',
          headerStyle:{backgroundColor:'transparent',position: 'absolute',zIndex: 100, top: 0, left: 0, right: 0}
        })
      } 
    }),

  },
},{
  lazy:true,
})

class App extends React.Component {
  componentWillMount() {
    Meteor.connect(localHostServerUrl);  
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
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
