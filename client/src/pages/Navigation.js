import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>StudyBuddies</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>

        <Nav pullRight>
          <LinkContainer to={'/feed'}>
            <NavItem eventKey={1}>Groups Feed</NavItem>
          </LinkContainer>

          <LinkContainer to={'/mygroups'}>
            <NavItem eventKey={1}>My Groups</NavItem>
          </LinkContainer>

          { !token ?
            <LinkContainer to={'/login'}>
              <NavItem eventKey={1}>Signin</NavItem>
            </LinkContainer> : null}


          { token ?
            <LinkContainer to={'/login'}>
              <NavItem eventKey={2} onClick={this.handleLogout}>Logout</NavItem>
            </LinkContainer> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  };
};

export default Navigation;
