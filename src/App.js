import React, { Component } from 'react';
import './App.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";

//this class is for the buttons and tables
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {isToggleOn: true};
    this.state1 = {isTog: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleCluck() {
    this.setState(state => ({
      isTog: !state.isTog
    }));
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleCluck}>
          {this.state.isTog ? 'Java' : 'Kotlin'}
        </button>
        <AceEditor 
          theme="dracula"
          mode="java"
          mode="kotlin"
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
      </div>
    );
  }
}
export default App