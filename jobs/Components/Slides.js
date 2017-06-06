import React, {Component} from 'react'
import {Text, View, ScrollView, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {

	rednerLastSlide(index) {
		if(index === this.props.data.length -1) {
			return (
				<Button 
					title='Onwards !'
					raised
					buttonStyle={styles.buttonStyle}
					onPress = {this.props.onComplete}
				/>
			)
		}
	}

	renderSlide(){
		return this.props.data.map((slide, index)=> {
			return (
				<View key={slide.text} style={[styles.slideViewStyle, {backgroundColor:slide.color}]}>
					<Text style={styles.slideTextStyle}>{slide.text}</Text>
					{this.rednerLastSlide(index)}
				</View>
			)
		})
	}
	render(){
		return(
			<ScrollView 
				horizontal 
				pagingEnabled
				style={styles.container}
			>
				{this.renderSlide()}
			</ScrollView>
		)
	}
}

const styles = {
	container:{
		flex:1
	},
	slideViewStyle:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		width:SCREEN_WIDTH
	},
	slideTextStyle: {
		fontSize:30,
		color:'#fff',
		textAlign:'center'
	},
	buttonStyle:{
		backgroundColor:'#0288D1',
		marginTop:15
	}
}

export default Slides