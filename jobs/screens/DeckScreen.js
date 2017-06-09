import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import {connect} from 'react-redux'
import Swipe from '../Components/Swipe'
import {Card,Button} from 'react-native-elements'
import {MapView} from 'expo'

class DeckScreen extends Component {
	renderCard(job){
		const initialRegion = {
			longitude: job.longitude,
			latitude: job.latitude,
			latitudeDelta:0.045,
			longitudeDelta:0.02
		}
		return (
			<Card title={job.jobtitle}>
				<View style={{height:200}}>
					<MapView
						scrollEnabled={false}
						style={{flex:1}}
						cacheEnabled={Platform.OS === 'android' ? true : false}
						initialRegion={initialRegion}
					>

					</MapView>
				</View>
				<View style={styles.detailWrapper}>
					<Text>{job.company}</Text>
					<Text>{job.formattedRelativeTime}</Text>
				</View>
				<Text>
					{job.snippet.replace(/<b>/g, '').replace(/<\/b/g,'')}
				</Text>
			</Card>
		)
	}

	renderNoMoreCards(){
		return (
			<Card title='No More Jobs'>
			</Card>
		)
	}

	render(){
		return (
			<View>
				<Swipe
					data={this.props.jobs}
					renderCard={this.renderCard}
					renderNoMoreCards = {this.renderNoMoreCards}
				/>
			</View>
		)
	}
}

const styles ={
	detailWrapper:{
		flexDirection: 'row',
		justifyContent:'space-around',
		marginBottom:10
	}
}

function mapStateToProps(state){
	return {jobs: state.jobs.results}
}

export default connect(mapStateToProps)(DeckScreen);