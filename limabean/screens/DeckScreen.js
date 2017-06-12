import React, {Component} from 'react'
import {View, Text} from 'react-native'

class DeckScreen extends Component {
	render(){
		return (
			<View style={style.container} >
				<View style={style.cardView}>
					<Text>DeckScreen</Text>
					<Text>DeckScreen</Text>
					<Text>DeckScreen</Text>
					<Text>DeckScreen</Text>
					<Text>DeckScreen</Text>
				</View>
			</View>
		)
	}
}

const style ={
	container:{
		flexDirection:'row',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	cardView:{
		backgroundColor:'red',
		transform: [
			{rotateX:'-5deg'}
		],
		width:300,
		borderRadius:10
	}
}
export default DeckScreen;