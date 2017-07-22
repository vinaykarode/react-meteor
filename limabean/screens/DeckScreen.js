import React, {Component} from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	ScrollView,
	Animated,
	PanResponder
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import {Card, Tile, Button} from 'react-native-elements';
import Meteor from 'react-native-meteor';

const data=[
  {id:1, text:'Top news now', method:'news.newsNowTop'},
  {id:2, text:'Top news this week', method:'news.newsSevenDayTop'},
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

	fetchDataAndNavigate(text){
		const {navigate} = this.props.navigation;
		console.log(text)
		Meteor.call(text, (err, results) => {
			if(err){
				console.log('error', error)
			} else {
				// this.setState({newsSevenDayTop:results})
				navigate('summary',{results:results})
				// console.log(results)
			}
		})
	}
	renderCard(){
		
		return data.map((slide,index) => {
			return(
				<Animated.View key={slide.id} style={[{transform:[{scale:this.state.animatedValue[slide.id]}]}, style.card]}>
					<Button 
						buttonStyle={style.card}
						title={slide.text}
						backgroundColor='white'
						color='black'
						onPress={this.fetchDataAndNavigate.bind(this,slide.method)}
					/>
				</Animated.View>
			)
		})
	}
	render(){
		return (
			<ScrollView contentContainerStyle={style.container}>
				<NavigationBar
				    statusBar={{style: 'default'}}
				    tintColor={'transparent'}
			    />
				{this.renderCard()}
			</ScrollView>
		)
	}
}

const style ={
	container:{
		alignItems:'center',
		justifyContent:'flex-start',	
	},
	card:{
		width:300,
		height:150,
		borderRadius:10,
		margin:5,
		alignItems:'center',
	}
}

export default DeckScreen;