import React, {Component} from 'react'
import {
	View, 
	Text,
	Animated,
	PanResponder
} from 'react-native'

class SummaryScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			pan:new Animated.ValueXY()
		}

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove : Animated.event([null, {dx:this.state.pan.x, dy:this.state.pan.y}]),
			onPanResponderRelease: (e, gesture) => {}
		})
	}
	render(){
		return (
			<Animated.View 
			{...this.panResponder.panHandlers}
			style={this.state.pan.getLayout()}
			>
				<Text>SummaryScreen</Text>
				<Text>SummaryScreen</Text>
				<Text>SummaryScreen</Text>
				<Text>SummaryScreen</Text>
				<Text>SummaryScreen</Text>
			</Animated.View>
		)
	}
}

export default SummaryScreen;