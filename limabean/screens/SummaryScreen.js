import React, {Component} from 'react'
import {
	View, 
	Text, 
	ScrollView,
	Image,
	Dimensions,
	StatusBar
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import {Card, Tile, Button} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { Components } from 'expo';

const { LinearGradient } = Components;
const {screenHeight, screenWidth} = Dimensions.get('window');

class SummaryScreen extends Component {
	componentDidMount() {
		console.log('meteor calling')

	}
	renderCard(){
		const { params } = this.props.navigation.state;
		return params.results.map((slide,index) => {
			return (
				<ScrollView key={slide.url}>
				   <StatusBar
				     backgroundColor="blue"
				     barStyle="light-content"
				   />
					<Image 
						style={{width: screenWidth, height:300}}
						source={{uri: slide.imageUrl}}
					/>
			        <LinearGradient
			          colors={['rgba(0,0,0,0.5)', 'transparent']}
			          style={{
			            position: 'absolute',
			            left: 0,
			            right: 0,
			            top: 0,
			            height: 200,
			          }}
			        />
					<Text>{slide.headline}</Text>
					<Text>{slide.summary}</Text>
					
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
				</ScrollView>
			)
		})
	}
	render(){
		const { params } = this.props.navigation.state;
		return (
			<Swiper removeClippedSubviews={false}>
			    {this.renderCard()}
			</Swiper>
		)
	}
}
const style ={
	container:{
		alignItems:'center',
		justifyContent:'flex-start',	
		backgroundColor:'whitesmoke',
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
export default SummaryScreen;