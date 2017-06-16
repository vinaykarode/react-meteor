import React, {Component} from 'react'
import {View, Text} from 'react-native'
import NavigationBar from 'react-native-navbar';

const titleConfig = {
	title: 'Hello, world',
	style:{
		color:'black'
	}
}

class WelcomeScreen extends Component {
	render(){
		return (
			      <NavigationBar
				    statusBar={{style: 'default'}}
				    tintColor={'transparent'}
				    title={titleConfig}
			      />
		)
	}
}

export default WelcomeScreen;