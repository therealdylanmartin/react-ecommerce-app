import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(err) {
      console.error(err.message);
    }
  }

  handleChange = event => {
    const {value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" id="sign-in-email" value={email} handleChange={this.handleChange} label="email" required />
          <FormInput type="password" name="password" id="sign-in-password" value={password} handleChange={this.handleChange} label="password" required />
          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn;