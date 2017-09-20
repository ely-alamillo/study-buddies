import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../actions';

import { FormControl, FormGroup } from 'react-bootstrap';


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password : '',
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  };

  handlePassword(event) {
    this.setState({ password: event.target.value });
  };

  handleRegister(event) {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password)
    this.setState({ username: '', password: ''});
  };

  render() {
    return (
      <div className='container'>
        <form className='login-form' onSubmit={this.handleRegister}>
        <FormGroup>
          username
          <FormControl
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </FormGroup>
        <FormGroup>
          password
          <FormControl
            type='text'
            placeholder='password'
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <button className='btn btn-success' type='submit'> Login </button>
        </FormGroup>
      </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    register,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
