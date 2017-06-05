import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';

    const MainNavigator = TabNavigator({
      welcome:{screen:WelcomeScreen},
      auth:{screen:AuthScreen}
    });
    
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
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
