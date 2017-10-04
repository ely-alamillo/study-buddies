import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Navigation.css'

const token = window.localStorage.getItem('token');

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.token = token;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    window.localStorage.removeItem('token');
    this.setState({ token: null });
    window.location = '/';
  };

  render() {
    return (
    <Navbar collapseOnSelect className='navbar-custom'>
      <Navbar.Header>
        <Navbar.Brand className='navbar-custom-color'>
          <a href='/'>StudyBuddies</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to={'/feed'}>
            <NavItem eventKey={1}>Groups Feed</NavItem>
          </LinkContainer>

          <LinkContainer to={'/mygroups'}>
            <NavItem eventKey={1}>My Groups</NavItem>
          </LinkContainer>

          <LinkContainer to={'/login'}>
            <NavItem eventKey={1}>Log In</NavItem>
          </LinkContainer>

          <LinkContainer to={'#'}>
            <NavItem eventKey={2} onClick={this.handleLogout}>Logout</NavItem>
          </LinkContainer>

          {/* { !this.token ?
            <LinkContainer to={'/login'}>
              <NavItem eventKey={1}>Log In</NavItem>
            </LinkContainer> : null}


          { this.token ?
            <LinkContainer to={'/'}>
              <NavItem eventKey={2} onClick={this.handleLogout}>Logout</NavItem>
            </LinkContainer> : null} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  };
};

export default Navigation;
