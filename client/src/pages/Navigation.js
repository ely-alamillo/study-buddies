import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Navigation.css'

const token = window.localStorage.getItem('token');

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    window.localStorage.removeItem('token');
  };

  render() {
    return (
    <Navbar collapseOnSelect className='navbar-custom'>
      <Navbar.Header>
        <Navbar.Brand>
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

          { !token ?
            <LinkContainer to={'/login'}>
              <NavItem eventKey={1}>Log In</NavItem>
            </LinkContainer> : null}


          { token ?
            <LinkContainer to={'/'}>
              <NavItem eventKey={2} onClick={this.handleLogout}>Logout</NavItem>
            </LinkContainer> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  };
};

export default Navigation;
