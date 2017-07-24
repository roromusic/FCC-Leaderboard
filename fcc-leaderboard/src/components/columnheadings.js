import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

class ColumnHeadings extends React.Component {
  changeSelected = (event) => {
    if(!$(event.target).hasClass("selected")){
      $(".selectable").toggleClass("selected");
    }
  };
  
  handleClick = (column, event) => {
    this.props.sortTable(column);
    this.changeSelected(event);
  };

  render() {
    return(
      <thead>
        <tr id="colheader">
          <th>#</th>
          <th>Camper Name</th>
          <th className="points selectable selected" onClick={this.handleClick.bind(this, 'recent')}>Points - Past 30 Days</th>
          <th className="points selectable" onClick={this.handleClick.bind(this, 'alltime')}>Points - All time</th>
        </tr>
      </thead>
    );
  }
}

export default ColumnHeadings