import React from 'react';
import { connect } from 'react-redux';
import User from './user'

class Users extends React.Component {
  render() {
    let count = 0;
    let userlist = this.props.users.map(function(user) {
      count++;
      return(
        <User key={user.username} count={count} camper={user} recent={user.recent} alltime={user.alltime} />
      );
    });
    return(
      <tbody>
        {userlist}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
};

const Container = connect(mapStateToProps, null)(Users);

export default Container