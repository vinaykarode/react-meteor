import {Meteor} from 'meteor/meteor'
import { Locations } from '../locations';

Meteor.publish('Locations.pub.details', function getLocationDetails({locationId}) {
	console.log(locationId);
	return Locations.find({_id:locationId});
})