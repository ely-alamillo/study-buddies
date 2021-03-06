import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleGroup } from '../actions';


class SingleGroup extends Component {
  // constructor(props) {
  //   super(props);
  // };
  componentDidMount() {
    const { id } = this.props.match.params;
    const token = window.localStorage.getItem('token')

    this.props.getSingleGroup(id, token);
  };

  render() {
    return (
      <div className='container text-left'>
        <div className='panel panel-default'>
          <div className='panel-heading'>{this.props.groupDetails.createdBy}</div>
          <div className='panel-body'>
            <h1>{this.props.groupDetails.groupName}</h1>
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
            <strong>time:</strong> {this.props.groupDetails.time} &nbsp;
            <strong>Location:</strong> {this.props.groupDetails.location}
          </div>
      </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    groupDetails: state.groups,
  };
};
// export default SingleGroup;

export default connect(mapStateToProps, { getSingleGroup })(SingleGroup);
