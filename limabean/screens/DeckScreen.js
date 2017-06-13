import React, {Component} from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	ScrollView,
	Animated,
	PanResponder
} from 'react-native'

import {Card} from 'react-native-elements';
import {Components} from 'expo';
const {BlurView} =Components;

const data=[
  {id:1, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:2, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:3, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:4, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:5, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
]


class DeckScreen extends Component {
	renderCard(){
		return data.map((slide,index) => {
			return(
				<View key={slide.id} style={style.card}>
					<Text>{slide.text}</Text>
					<Text>{slide.text}</Text>
				</View>
			)
		})
	}
	render(){
		return (
			<ScrollView contentContainerStyle={style.container} scrollEnabled={false}>
				{this.renderCard()}
			</ScrollView>
		)
	}
}

const style ={
	container:{
		alignItems:'center',
		justifyContent:'flex-start',	
		backgroundColor:'whitesmoke'
	},
	card:{
		backgroundColor:'white',
		transform: [
			{rotateX:'-3deg'}
		],
		width:300,
		height:150,
		borderRadius:10,
		margin:5,
		alignItems:'center',
		elevation:5
	}
}

export default DeckScreen;