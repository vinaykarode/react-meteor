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

const data=[
  {id:1, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:2, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:3, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:4, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
  {id:5, text:'Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum'},
]


class DeckScreen extends Component {
	constructor(props){
		super(props);
		const animatedValue = []

		data.forEach((value) => {
			animatedValue[value.id] = new Animated.Value(0)
		})

		const animations = data.map((item) => {
			return Animated.spring(animatedValue[item.id], {
				toValue:1,
				duration:500
			})
		})
		Animated.stagger(100, animations).start()

		this.state={animatedValue}
	}

	renderCard(){
		return data.map((slide,index) => {
			return(
				<Animated.View key={slide.id} style={[{transform:[{scale:this.state.animatedValue[slide.id]}]} ,style.card]}>
					<Text>{slide.text}</Text>
					<Text>{slide.text}</Text>
				</Animated.View>
			)
		})
	}
	render(){
		return (
			<ScrollView contentContainerStyle={style.container}>
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
		width:300,
		height:150,
		borderRadius:10,
		margin:5,
		alignItems:'center',
	}
}

export default DeckScreen;