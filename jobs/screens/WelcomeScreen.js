import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Slides from '../Components/Slides'

const slide_data = [
	{text: 'Welcome to tutorial app', color:'#f05d23'},
	{text: 'this is an app tut1', color:'#e4e6c3'},
	{text: 'swipe left or right to save the card and enj', color:'#c5d86d'}
]


class WelcomeScreen extends Component {
	onSlideComplete = () => {
		this.props.navigation.navigate('auth')
	}

	render(){
		return (
			<View style={{flex:1}}>
				<Slides 
					data={slide_data} 
					onComplete={this.onSlideComplete}
				/>
			</View>
		)
	}
}

export default WelcomeScreen;