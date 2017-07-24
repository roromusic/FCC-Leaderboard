import React from 'react';
import Header from './header'
import LeaderBoard from './leaderboard'

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