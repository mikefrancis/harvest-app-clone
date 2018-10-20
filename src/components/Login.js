import React from 'react';
import { connect } from 'react-redux';
import { login } from './../store/actions';
import { Container, FormGroup, FormLabel, FormInput, Button } from '../styled';
import FormComponent from './FormComponent';

class Login extends FormComponent {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        const {
            username,
            password,
        } = this.state;

        return username.trim() !== '' && password.trim() !== '';
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.isValid()) {
            return;
        }

        const {
            dispatch,
        } = this.props;

        dispatch(
            login({
              username: this.state.username,
              password: this.state.password,
          })
        );
    }

    render() {
        return (
            <Container>
                <form method="POST" onSubmit={ this.handleSubmit }>
                  <FormGroup>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <FormInput onChange={ this.handleInputChange } value={ this.state.username } type="text" id="username" name="username" placeholder="Email address" />
                  </FormGroup>

                  <FormGroup>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormInput onChange={ this.handleInputChange } value={ this.state.password } type="password" id="password" name="password" placeholder="Password" />
                  </FormGroup>

                  <FormGroup>
                      <Button full disabled={ !this.isValid() } type="submit">Login</Button>
                  </FormGroup>
                </form>
            </Container>
        );
    }

}

export default connect()(Login);
