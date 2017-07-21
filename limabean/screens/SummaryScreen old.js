import React, {Component} from 'react'
import {
	View, 
	Text,
	Animated,
	PanResponder
} from 'react-native'

class SummaryScreen extends Component {
	// componentWillMount(){
		// this.position = new Animated.ValueXY(0,0)
		// Animated.spring(this.position, {
		// 	toValue:{x:200,y:25}
		// }).start();
	// }

	constructor(props){
		super(props);
		const position = new Animated.ValueXY()
		const positionRed = new Animated.ValueXY()
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true, //any time user taps on screen this functin is called, 
													// we can also run come caluculation to see if we 
													// should allow user to move this component
			onPanResponderGrant: (event, gesture) => {
				position.setOffset({x:position.x._value,y:position.y._value})
				position.setValue({x:0,y:0})
				positionRed.setOffset({x:positionRed.x._value,y:positionRed.y._value})
				positionRed.setValue({x:0,y:0})
			},
			onPanResponderMove:(event, gesture) => { //called when user drags finger across the screen
				position.setValue({ y:gesture.dy})
				positionRed.setValue({ y:gesture.dy})
				// if(Math.abs(gesture.dy) > 50){
				// 	positionRed.setValue({ y:gesture.dy})
				// }
				// Animated.parallel([
				// 	Animated.spring(position, {
				// 		toValue:{x:0, y:gesture.dy}
				// 	}).start(),
				// 	Animated.spring(positionRed, {
				// 		toValue:{x:0, y:gesture.dy}
				// 	}).start(),
				// ])

			},			
			// onPanResponderMove: Animated.event([null, {
			// 	dx:position.x,
			// 	dy:position.y,
			// }]),
			onPanResponderRelease: (event, gesture) => {			// called after user remove finger from screen
				position.flattenOffset();
				positionRed.flattenOffset();
			}, 			
		})
		const panResponderRed = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: (event, gesture) => {

			},
			onPanResponderMove:(event,gesture) => {
				positionRed.setValue({ y:gesture.dy})
				position.setValue({ y:gesture.dy})
			},
			onPanResponderRelease :() =>{
				position.setValue({ x:0, y:0})
				positionRed.setValue({ x:0,y:0})
			}
		})
		this.state = {panResponder,panResponderRed, position, positionRed}
	}
	render(){
		return (

			<View style={style.container}>
				<Animated.View 
				style={[ this.state.position.getLayout() ,style.ball]}
				{...this.state.panResponder.panHandlers}
				>
				</Animated.View>

				<Animated.View 
				style={[ this.state.positionRed.getLayout() ,style.ballRed]} 
				{...this.state.panResponderRed.panHandlers}
				>
				</Animated.View >
			</View>
		)
	}
}

const style = {
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	ball:{
		width:60,
		height:60,
		borderRadius:30,
		borderWidth:30,
		borderColor:'black'
	},
	ballRed:{
		width:60,
		height:60,
		borderRadius:30,
		borderWidth:30,
		borderColor:'red'
	}
}

export default SummaryScreen;