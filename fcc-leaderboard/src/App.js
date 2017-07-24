import React from 'react';
import './output.css';
import Header from './components/header'
import LeaderBoard from './components/leaderboard'

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <LeaderBoard apiroot="https://fcctop100.herokuapp.com/api/fccusers/top/"/>
      </div>
    );
  }
}

export default App
