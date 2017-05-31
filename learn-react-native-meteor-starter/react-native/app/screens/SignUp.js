import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';

class SignUp extends Component {
	constructor(props){
		super(props);
		    this.state = {
		      email: '',
		      username: '',
		      password: '',
		      confirmPassword: '',
		    };
	}

  handleChangeEmail = (email) => {
    const { username } = this.state;
    const update = { email };
    const inferredUsername = email.split('@')[0];
    if (username === inferredUsername.slice(0, inferredUsername.length - 1)) {
      update.username = inferredUsername;
    }
    this.setState(update);
  };

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
	    <Container scroll>
      <Card>
        <Input
          label="Email"
          placeholder="Please enter your email..."
          keyboardType="email-address"
          onChangeText ={this.handleChangeEmail}
          value={this.state.email}
        />
        <Input
          label="Username"
          placeholder="Please enter your username..."
          onChangeText ={(email) => this.setState({username})}
          value={this.state.username}   
        />
        <Input
          label="Password"
          placeholder="Please enter your password..."
          secureTextEntry
          onChangeText ={(email) => this.setState({password})}
          value={this.state.password}
        />
        <Input
          label="Confirm Password"
          placeholder="Please enter confirm your password..."
          secureTextEntry
          onChangeText ={(email) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <PrimaryButton
          title="Sign Up"
        />
      </Card>

      <SecondaryButton
        title="Sign In"
        onPress={this.goToSignIn}
      />
    </Container>
    );
  }
}

export default SignUp;
