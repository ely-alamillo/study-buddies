import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGroups, addGroup } from "../actions";
import { FormControl, FormGroup, Form, Col, ControlLabel,
Modal, Button, ButtonToolbar } from "react-bootstrap";


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      groupName: '',
      location: '',
      subject:'',
      instructor: '',
      time: '',
    };
    this.getInitialState = this.getInitialState.bind(this);
    this.handleGroupName = this.handleGroupName.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleInstructor = this.handleInstructor.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }
  getInitialState() {
    return { smShow: false, lgShow: false };
  };

  handleGroupName(event) {
    this.setState({ groupName: event.target.value });
  }

  handleLocation(event) {
    this.setState({ location: event.target.value})
  }

  handleSubject(event) {
    this.setState({ subject: event.target.value });
  }

  handleInstructor(event) {
    this.setState({ instructor: event.target.value });
  }

  handleTime(event) {
    this.setState({ time: event.target.value });
  }

  handleLink(event) {
    // console.log(event);
    // this.history.push()
  }

  handleSubmit(event) {
    event.preventDefault();
    const group = {
      groups: [],
      groupName: this.state.groupName,
      location: this.state.location,
      subject: this.state.subject,
      instructor: this.state.instructor,
      time: this.state.time
    };
    this.setState({
      groupName: '',
      location: '',
      subject:'',
      instructor: '',
      time: '',
    });
    const token = window.localStorage.getItem("token");
    this.props.addGroup(group, token);
    // this.props.getGroups(token);
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    this.props.getGroups(token);
    // this.props.getGroups(token);
  }
  // componentWillMount() {
  //   const token = window.localStorage.getItem("token");
  //   this.props.getGroups(token);
  //   // this.props.getGroups(token);
  // }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup className='text-right'>
                <Col sm={2} > <ControlLabel>Group Name</ControlLabel></Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="group name"
                    value={this.state.groupName}
                    onChange={this.handleGroupName}
                  />
                </Col>
              </FormGroup>

              <FormGroup className='text-right'>
                <Col sm={2}><ControlLabel>Location</ControlLabel></Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="location"
                    value={this.state.location}
                    onChange={this.handleLocation}
                  />
                </Col>
              </FormGroup>

              <FormGroup className='text-right'>
                <Col sm={2}><ControlLabel>Subject</ControlLabel></Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="subject"
                    value={this.state.subject}
                    onChange={this.handleSubject}
                  />
                </Col>
              </FormGroup>

              <FormGroup className='text-right'>
                <Col sm={2}><ControlLabel>Instructor</ControlLabel></Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="instructor"
                    value={this.state.instructor}
                    onChange={this.handleInstructor}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='text-right'>
                <Col sm={2}><ControlLabel>Time</ControlLabel></Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="time"
                    value={this.state.time}
                    onChange={this.handleTime}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='text-right'>
                <Col sm={12} className='text-right'>
                  <button className="btn btn-success" type="submit" >
                    Add Group
                  </button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>

        {this.props.groups.map((group, i) => {
          return (
            <div className='container text-left' key={i}>
              <div className='panel panel-default'>
                <div className='panel-heading'>{group.createdBy}</div>

                <div className='panel-body'>
                  <h1>
                    {/* <Link to={`/feed/${group._id}`} onClick={this.handleLink}>{group.groupName}</Link> */}
                    <Link to={`#`} onClick={this.handleLink}>{group.groupName}</Link>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>

                <div className="panel-footer">
                  <strong>time:</strong> {group.time} &nbsp;
                  <strong>Location:</strong> { group.location ? group.location : 'no location'}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups
  };
};

export default connect(mapStateToProps, { getGroups, addGroup })(Feed);
