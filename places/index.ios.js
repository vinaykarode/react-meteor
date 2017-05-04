/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import PlaceMap from './place_map.js'

export default class places extends Component {
  constructor(){
    super();
    this.state={
      selectedTab:0,
      annotations : [
           {
            title: 'Smithsonian Museum',
            latitude: 38.8980,
            longitude: -77.0230
          },
          {
            title: 'UMCP',
            latitude: 38.9869,
            longitude: -76.9426
          },
          {
            title: 'Arlington',
            latitude: 38.8783,
            longitude: -77.0687
          }
      ]
    }
  }
  handleTabPress(tab){
    this.setState({selectedTab:tab})
  }
  render() {
    return (
      <TabBarIOS >
        <TabBarIOS.Item systemIcon="favorites" selected={this.state.selectedTab == 0} onPress={this.handleTabPress.bind(this,0)}>

          <PlaceMap annotations={this.state.annotations}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Place" icon={require('./assets/pin.png')} selected={this.state.selectedTab == 1} onPress={this.handleTabPress.bind(this, 1)}>
          <View>
            <Text style={styles.text}>Add place</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign:'center',
    color:'#333333',
    marginTop:50
  },
  view:{
    backgroundColor:'#fed',
    flex:1
  }
});

AppRegistry.registerComponent('places', () => places);
