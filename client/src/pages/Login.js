import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { login } from '../actions';

import { FormControl, FormGroup, ControlLabel, Row, Col } from 'react-bootstrap';

import './Login.css';


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
    this.setState({ username: '', password: ''});
  };

  render() {
    return (
      <div className='auth-form'>
        <div className='container-fluid container-auth'>
          <Row>
            {/* <Col md={6}>
              <div className='jumbotron'>
                <h1>hello</h1>
              </div>
            </Col> */}
            <Col md={6} mdOffset={3}>
              <div className='jumbotron login-container-register'>
                <form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type='text'
                      placeholder='username'
                      value={this.state.username}
                      onChange={this.handleUsername}
                      className='input-format-register'
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type='text'
                      placeholder='password'
                      value={this.state.password}
                      onChange={this.handlePassword}
                      className='input-format-register'
                    />
                    <button className='btn btn-success' type='submit'> Login </button>
                    <br />
                    <h4 className='text-center'>
                      If you don't have an acount you can
                      <Link to='/'> Register</Link> here.
                    </h4>
                  </FormGroup>
                </form>
              </div>
            </Col>
          </Row>
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
