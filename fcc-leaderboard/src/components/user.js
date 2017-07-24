import React from 'react';

class User extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.count}</td>
        <td>
          <a href={"https://www.freecodecamp.com/" + this.props.camper.username} target="_blank">
            <img className="camperimg" src={this.props.camper.img}/>
            <span>{this.props.camper.username}</span>
          </a>
        </td>
        <td className="points">{this.props.recent}</td>
        <td className="points">{this.props.alltime}</td>
      </tr>
    );
  }
}

export default User