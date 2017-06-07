import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from './types'
import {AsyncStorage} from 'react-native'
import {Facebook} from 'expo'

//AsyncStorage - how it works
//AsyncStorage.setItem('fb_token', token)
//AsyncStorage.getitem('fb_token')


export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token')
	if (token) {
		//token exists so login to app directly
		dispatch({type:FACEBOOK_LOGIN_SUCCESS, payload:token})
	} else {
		//no token go to the facebook auth flow
		doFacebookLogin(dispatch)
	}
}

const doFacebookLogin = async dispatch => {
	let {type, token} = await Facebook.logInWithReadPermissionsAsync('131655050742983', {
		permissions: ['public_profile']
	});

	if (type === 'cancel') {
		return dispatch({type:FACEBOOK_LOGIN_FAIL})
	}

	await AsyncStorage.setItem('fb_token', token)
	dispatch({type:FACEBOOK_LOGIN_SUCCESS, payload:token})
}