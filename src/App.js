import React, { Component } from 'react';
import './App.css';
import Main from './Ace';
import AceEditor from 'react-ace';
import { Ace } from 'ace-builds';

//this class is for the buttons and tables
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
          </button>
        </header>
        <AceEditor />
      </div>
    );
  }
}
export default App