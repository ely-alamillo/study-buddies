import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';

import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password : '',
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  };

  handlePassword(event) {
    this.setState({ password: event.target.value });
  };

  handleLogin(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password, this.props.history)
    console.log('history: ', this.props.history);
    this.setState({ username: '', password: ''});
  };

  render() {
    return (
      <div className='container auth-form'>
        <div className='jumbotron login-container'>
          <form onSubmit={this.handleRegister}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type='text'
                placeholder='username'
                value={this.state.username}
                onChange={this.handleUsername}
                className='input-format'
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type='text'
                placeholder='password'
                value={this.state.password}
                onChange={this.handlePassword}
                className='input-format'
              />
              <button className='btn btn-success' type='submit'> Register </button>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  // console.log(state.user.token);
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
