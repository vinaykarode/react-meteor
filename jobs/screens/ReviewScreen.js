import React, {Component} from 'react'
import {Platform, View, Text} from 'react-native';
import {Button} from 'react-native-elements'


class ReviewScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		title:'Review Jobs',
		headerRight: (
			<Button 
				title='settings' 
				onPress={()=> {navigation.navigate('settings')}} 
				backgroundColor='rgba(0,0,0,0)'
				color='rgba(0,125,255,1)'
			/>
			),
		headerStyle:{
			marginTop:Platform.OS === 'android'? 24 :0
		}
	})
	render(){
		return (
			<View>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
			</View>
		)
	}
}

export default ReviewScreen;