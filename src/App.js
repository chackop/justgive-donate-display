import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataService from './components/DataService';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Donations App</h1>
          </header>
          <p className="App-intro">
            An App to display various donations data
          </p>
          <DataService />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
