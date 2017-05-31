import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Text style={this.props.s}>Hello {this.props.name}</Text>
    );
  }
}

class Greetings extends Component {
  render(){
    return (
      <View style={{flex:1}}>
      <View style={{alignItems:'center', backgroundColor:'powderblue'}}>
        <HelloWorldApp name='vinya' s={Styles.bigBlue}/>
        <HelloWorldApp name='hahah' s={Styles.red}/>
        <HelloWorldApp name='siphon' s={Styles.bigBlue}/>
      </View>
      <View style={{flex:1,width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{flex:2,width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:22
  },
  red:{
    color:'red'
  }
})

AppRegistry.registerComponent('facebookTutorial', () => Greetings);