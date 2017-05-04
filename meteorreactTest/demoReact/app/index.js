// app/index.js
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Container, Button, connectStyle} from 'native-base';

import Meteor, {createContainer} from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

class App extends Component {

  componentWillMount() {
    Meteor.connect(SERVER_URL);  
  }

  handleAddItem() {
  const name = Math.floor(Math.random() * 10); // just generate some random number
  Meteor.call('Items.addOne', { name }, (err, res) => {
    // Do whatever you want with the response
    console.log('Items.addOne', err, res);
  });
  }


  render() {
    return (
      <Container>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Meteor!
        </Text>
        <Text style={styles.instructions}>
          Item count: {this.props.count}
        </Text>

        <Button block rounded bordered style={styles.button} onPress={this.handleAddItem}>
          <Text>Add item</Text>
        </Button>
      </View>
      </Container>
    );
  }
};


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },  
  button: {
    padding: 100,
    margin:'auto'
  },
}

connectStyle('yourTheme.CustomComponent', styles)(App);

export default createContainer(() => {
  Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find().length,
  };
}, App);












