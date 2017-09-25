import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { register } from '../actions';

import { FormControl, FormGroup, ControlLabel, Row, Col } from 'react-bootstrap';

import './Register.css';


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
    this.props.register(this.state.username, this.state.password, this.props.history)
    console.log('history: ', this.props.history);
    this.setState({ username: '', password: ''});
  };

  render() {
    return (
      <div className='auth-form-register'>
        <div className='container-fluid container-auth-register'>
          <Row>
            <Col md={7}>
              <div className='jumbotron desc-register'>
                <h1 className='main-quote'>Introducing StudyBuddies!</h1>
                <br />
                <h2 className='quote'>
                  Giving you the control to build study groups around campus <br />
                  at the touch of a button.
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <div className='jumbotron login-container-register'>
                <form onSubmit={this.handleRegister}>
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
                    <button className='btn btn-success' type='submit'> Register </button>
                    <h4 className='text-center'>
                      If you already have an acount you can
                      <Link to='/login'> Sign In</Link> here.
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
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    register,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
