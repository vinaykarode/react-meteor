import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';
import {Button, Card, List, ListItem} from 'react-native-elements';
import {Text} from 'react-native';
import colors from '../config/colors';
import _ from 'lodash';
import Meteor, {createContainer} from 'react-native-meteor';
import NotFound from '../components/NotFound'
import moment from 'moment';

const CheckedIn = 'in';
const CheckedOut = 'out';

class LocationDetails extends Component {

	constructor(props){
		super(props);
		this.state={
			changingStatus:false,
		};
	}

	attemptCheckIn = () => {
		const {location} = this.props;
		let status = CheckedIn
		if(location.checkedInUserId){
			status=CheckedOut
		}

		if(this.props.user !== null) {
			this.setState({changingStatus:true})
			Meteor.call('Locations.changeCheckIn', {locationId:location._id, status:status}, (err) =>{
				if(err){
					this.props.alertWithType('error', 'Error', err.reason)
				}
				this.setState({changingStatus:false})
			})
		}else {
			this.props.navigation.navigate('Account')	
		}

	}

	renderItem = () => {
		if (!this.props.activityReady){
			return <Header> loading... </Header>
		} else if (this.props.activity.length === 0){
			return (
				<NotFound text="No Activity Yet" small/>
			)			
		}

		return this.props.activity.map((a) => (
			<ListItem   
				key={a._id} 
				title={a.username}
				subtitle={moment(a.createdAt).format('MMM Do @ h:mma')}
				rightTitle={a.type === CheckedIn ? 'Checked In': 'Checked Out'}
			/>
		));

	}

  render() {
  	{/* const {location} = this.props.navigation.state.params
  */}
  	const location = this.props.location || _.get(this.props, 'navigation.state.params.location',{})
   	let icon = { name: 'check' };
	let title = 'Check In';
	let backgroundColor = colors.primary;
    
  	const userId = _.get(this.props, 'user._id', 'demo');
  	const checkedIn = location.checkedInUserId === userId;
  	const available = typeof location.checkedInUserId !== 'string';

	if (checkedIn) {
	    icon = { name: 'close' };
	    title = 'Check Out';
	    backgroundColor = colors.red;
	} else if (!available) {
	    icon = { name: 'close' };
	    title = 'Not Available';
	}

    return (
      <Container scroll>
      	<Card title={location.station_name}>
      		<Text>{location.street_address}</Text>
      		<Text>{location.access_days_time}</Text>
      	</Card>
      	<Button
	        raised
	        icon={icon}
	        title={title}
	        backgroundColor={backgroundColor}
	        buttonStyle={{ marginVertical: 20 }}
	        disabled={!available && !checkedIn}
	        onPress = {this.attemptCheckIn}
	        loading={this.state.changingStatus}
	    />
	    <Card title='Activity'>
	    	<List containerStyle={{borderTopWidth:0,borderBottomWidth:0,marginTop:0}}>
	    		{this.renderItem()}
	    	</List>
	    </Card>
      </Container>
    );
  }
}

{/* export default LocationDetails; */}

const ConnectedLocationDetails = createContainer((params) => {
	const location = _.get(params, 'navigation.state.params.location', {})
	console.log(location._id);
	Meteor.subscribe('Locations.pub.details', {locationId: location._id})
	const activityHandle = Meteor.subscribe('Activity.pub.list', {locationId:location._id})
	// console.log(Meteor.collection('locations').findOne({_id:location._id}));
	return {
		user:Meteor.user(),
		location: Meteor.collection('locations').findOne({_id:location._id}),
		activityReady: activityHandle.ready(),
		activity:Meteor.collection('activity').find({locationId: location._id},{sort:{createdAt:-1}})
	}
}, LocationDetails);

export default ConnectedLocationDetails;
