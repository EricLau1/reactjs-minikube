import React, { Component } from 'react';
import Menu from './components/Menu';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Menu />
        <hr className="my-4"/>
        <Routes />
      </div>
    );
  }
}

export default App;
