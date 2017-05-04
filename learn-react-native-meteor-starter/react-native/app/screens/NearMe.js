import React, { Component } from 'react';
import Container from '../components/Container';
import { List,ListItem } from 'react-native-elements';

class NearMe extends Component {

	subTitle = (location) => {
	  let subtitle = '';
	  if (location.street_address) {
	    subtitle = location.street_address;
	  }

	  if (location.access_days_time && subtitle.length) {
	    subtitle = `${subtitle} - ${location.access_days_time}`;
	  } else if (location.access_days_time) {
	    subtitle = location.access_days_time;
	  }

	  return subtitle;
	};

  render() {
  	const locations = this.props.navigation.state.params.locations;
  	console.log(locations);
  return (
    <Container scroll>
      <List>
        {
          locations.map((l) => (
            <ListItem
              key={l._id}
              title={l.station_name}
              subtitle={this.subTitle(l)}
            />
          ))
        }
      </List>
    </Container>
  );

  }
}


export default NearMe;
