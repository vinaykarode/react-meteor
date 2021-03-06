import React, {Component} from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import {Logo} from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';

class Home extends Component {
	handleChangeText = () => {
		console.log('change text')
	}
	handlePressBaseCurrency = () => {
		console.log('press base currency')
	}
	handlePressQuoteCurrency = () => {
		console.log('press quote currency')
	}
	render() {
		return (
		  <Container>
		    <StatusBar translucent={false} barStyle="light-content" />
		    <Logo />
		    <InputWithButton
		    	buttonText = {TEMP_BASE_CURRENCY}
		    	onPress={this.handlePressBaseCurrency}
		    	defaultValue={TEMP_BASE_PRICE}
		    	keyboardType='numeric'
		    	onChangeText={this.handleChangeText}
		    />
		    <InputWithButton 
		    	editable={false}
		    	buttonText={TEMP_QUOTE_CURRENCY}
		    	onPress={this.handlePressQuoteCurrency}
		    	value={TEMP_QUOTE_PRICE}
		    />
		  </Container>
		)
	}
}


export default Home;