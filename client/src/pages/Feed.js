import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGroups, addGroup } from '../actions';
import { FormControl, FormGroup } from 'react-bootstrap';

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [ { groupName: 'dummy data'}],
      groupName: '',
      subject: '',
      instructor: '',
      time: '',
    };
    this.handleGroupName = this.handleGroupName.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleInstructor = this.handleInstructor.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleGroupName(event) {
    this.setState({ groupName: event.target.value });
  };

  handleSubject(event) {
    this.setState({ subject: event.target.value });
  };

  handleInstructor(event) {
    this.setState({ instructor: event.target.value });
  };

  handleTime(event) {
    this.setState({ time: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const group = {
      groupName: this.state.groupName,
      subject: this.state.subject,
      instructor: this.state.instructor,
      time: this.state.time
    }
    const token = window.localStorage.getItem('token')
    this.props.addGroup(group, token);
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    this.props.getGroups(token);
    // this.props.getGroups(token);
  };

  render() {
    return(
      <div>
        <div>
          <div className='container'>
            <form className='addgroup-form' onSubmit={this.handleSubmit}>
            <FormGroup>
              group name
              <FormControl
                type='text'
                placeholder='group name'
                value={this.state.groupName}
                onChange={this.handleGroupName}
              />
            </FormGroup>

            <FormGroup>
              subject
              <FormControl
                type='text'
                placeholder='subject'
                value={this.state.subject}
                onChange={this.handleSubject}
              />
            </FormGroup>

            <FormGroup>
              instructor
              <FormControl
                type='text'
                placeholder='instructor'
                value={this.state.instructor}
                onChange={this.handleInstructor}
              />
            </FormGroup>
            <FormGroup>
              time
              <FormControl
                type='text'
                placeholder='time'
                value={this.state.time}
                onChange={this.handleTime}
              />
            </FormGroup>
            <button className='btn btn-success' type='submit'> Ad Group </button>
          </form>
          </div>
        </div>


        <ul>
          {this.props.groups.map((group, i) => {
            return <li key={i}> <Link to={`/feed/${group._id}`}>{group.groupName} </Link> </li>;
          })}
        </ul>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  }
};



export default connect(mapStateToProps, { getGroups, addGroup })(Feed);
