import React, {Component} from 'react';
import {MapView, View, StyleSheet} from 'react-native';

export default class PlaceMap extends Component {
	render() {
		return (
			<MapView style={styles.map}   region={{
			    latitude: 38.8977,
			    longitude: -77.0365,
			    latitudeDelta: 0.2,
			    longitudeDelta: 0.2,
			    title: "White House"
			  }} 
			  annotations={this.props.annotations} />
		)
	}
}

const styles = StyleSheet.create({
	map:{
		flex:1
	}
});
