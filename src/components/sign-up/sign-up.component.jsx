import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(err) {
      console.error(err.message);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" id="sign-up-name" value={displayName} handleChange={this.handleChange} label="display name" required />
          <FormInput type="email" name="email" id="sign-up-email" value={email} handleChange={this.handleChange} label="email" required />
          <FormInput type="password" name="password" id="sign-up-password" value={password} handleChange={this.handleChange} label="password" required />
          <FormInput type="password" name="confirmPassword" id="sign-up-confirm-pw" value={confirmPassword} handleChange={this.handleChange} label="confirm password" required />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;