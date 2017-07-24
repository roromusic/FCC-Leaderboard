import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux';
import { changeSelected, updateUsers} from '../actions'
import Users from './users'
import ColumnHeadings from './columnheadings'

class LeaderBoard extends React.Component {
  getData(column=this.props.column) {
    $.ajax({
      url: this.props.apiroot + column,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.props.updateUsers(data);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(this.props.apiroot, status, error.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return(
      <table>
        <ColumnHeadings {...this.props} sortTable={this.sortTable.bind(this)}/>
        <Users {...this.props} />
      </table>
    );
  }
  sortTable(column) {
    if(column !== this.props.column) {
      this.props.changeSelected(column);
      this.getData(column);
    }
  }
}

const mapStateToProps = (state) => {
  return {column: state.column}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelected: (column) => {
      dispatch(changeSelected(column))
    },
    updateUsers: (users) => {
      dispatch(updateUsers(users))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

export default Container