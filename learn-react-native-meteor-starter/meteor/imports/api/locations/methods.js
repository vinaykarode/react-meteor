import { Meteor } from 'meteor/meteor';
import { Locations } from './locations';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import {Activity} from '../activity/activity'

export const getNearestLocations = new ValidatedMethod({
  name: 'Locations.getNearestLocations',
  validate: new SimpleSchema({
    latitude: { type: Number, decimal: true },
    longitude: { type: Number, decimal: true },
  }).validator(),
  run({ latitude, longitude }) {
  	const query = {
  		location: {
  			$near: {
  				$geometry:{
  					type:'Point',
  					coordinates:[longitude, latitude],
  				},
  				$minDistance:0,
  			},
  		},
  	}
    console.log(latitude, longitude);
    return Locations.find(query, { limit: 10 }).fetch();
  },
});

export const changeCheckInStatus = new ValidatedMethod({
	name:'Locations.changeCheckIn',
	validate: new SimpleSchema({
		locationId:{type:String},
		status:{type:String, allowedValues:['in','out']}
	}).validator(),

	run({locationId, status}){

		if(!this.userId){
			throw new Meteor.Error('Locations.changeCheckIn.notLoggedIn', 'Must be logged in to change checkin status')
		}

		const location = Locations.findOne({_id:locationId})

		if(!location){
			throw new Meteor.Error('locations.changeCheckIn.invalidLocationId','Must pass a valid location id to change status')
		}

	    if (status === 'in' && location.checkedInUserId === this.userId) {
	      throw new Meteor.Error('Locations.changeCheckin.checkedInByUser',
	        'You\'re already checked in at this location.');
	    }

	    if (status === 'in' && typeof location.checkedInUserId === 'string') {
	      throw new Meteor.Error('Locations.changeCheckin.checkedInByDifferentUser',
	        'Someone is already checked in at this location.');
	    }

	    if (status === 'out' && location.checkedInUserId !== this.userId) {
	      throw new Meteor.Error('Locations.changeCheckin.notCheckedInHere',
	        'You\'re not checked into this location.');
	    }

	    const existingCheckin = Locations.findOne({ checkedInUserId: this.userId });
	    if (status === 'in' && existingCheckin) {
	      throw new Meteor.Error('Locations.changeCheckin.checkedInElsewhere',
	        'You\'re already checked in at a different location.');
	    }


		Locations.update({_id:locationId},{$set:{checkedInUserId:this.userId}})

		if(status == 'in'){
			Locations.update({_id:locationId},{$set:{checkedInUserId:'demo'}})
		}
		if(status == 'out'){
			Locations.update({_id:locationId},{$set:{checkedInUserId:null}})
		}

		Activity.insert({
			createdAt: new Date(),
			username: Meteor.user().username,
			userId: this.userId,
			type: status,
			locationId
		})
	}
})