import React, {Component} from 'react'
import {
	View, 
	Text, 
	StyleSheet
} from 'react-native'

class DeckScreen extends Component {
	render(){
		return (
			<View style={style.container} >
				<View 
					shadowOpacity={ 0.1 } 
					shadowRadius={ 10 }
					style={style.cardView}
				>
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
		borderRadius:10,
	},
	cardView:{
		backgroundColor:'red',
		transform: [
			{rotateX:'-10deg'}
		],
		width:300,
		borderRadius:10,
	}
}

export default DeckScreen;