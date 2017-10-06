import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myGroups, deleteGroup } from '../actions';

const inlineBlock = {
  display: 'inline-block',
  width: '50%',
}

class MyGroups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
  };

  componentWillMount() {
    const token = window.localStorage.getItem('token')
    this.props.myGroups(token);
  };
  componentDidMount() {
    const token = window.localStorage.getItem('token')
    this.props.myGroups(token);
  };

  handleDelete(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token')
    const id = event.target.value
    this.props.deleteGroup(token, id);
  };

  render() {
    return (
      <div className='container'>
        {this.props.userGroups.map((group, i) => {
          return (
            <div className='container text-left' key={i}>
              <div className='panel panel-default'>
                <div className='panel-heading'>{group.createdBy}</div>

                <div className='panel-body'>
                  <h1>{group.groupName}</h1>
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
                  <div className='text-left' style={inlineBlock}>
                    <strong>time:</strong> {group.time} &nbsp;
                    <strong>Location:</strong> { group.location ? group.location : 'no location'}
                  </div>
                  <div className='text-right' style={inlineBlock}>
                    <button className='btn btn-danger' value={group._id} onClick={this.handleDelete}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    userGroups: state.groups,
  }
};

export default connect( mapStateToProps, { myGroups, deleteGroup })(MyGroups);
// export default MyGroups;
