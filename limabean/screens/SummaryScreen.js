import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import NavigationBar from 'react-native-navbar';
import {Card, Tile, Button} from 'react-native-elements';

class SummaryScreen extends Component {
	componentDidMount() {
		console.log('meteor calling')

	}
	renderCard(){
		const { params } = this.props.navigation.state;
		return params.results.map((slide,index) => {
			return (
				<View key={slide.url}>
					<Card style={style.card}>
						<Text>{slide.headline}</Text>
					</Card>
				</View>
			)
		})
	}
	render(){
		const { params } = this.props.navigation.state;
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
		backgroundColor:'whitesmoke',
		flex:1
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