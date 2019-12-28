import React, { Component } from 'react';
import './App.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";
import ThemeSwitch from './src/ThemeSwitch'

//this class is for the buttons and tables
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
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
  handleTheme() {
    this.setState(state => ({
      isTo: !state.isTo
    }));
  }
  switchTheme() {
    if (handleTheme() = true) {
      App.AceEditor.theme="dawn"
    }
    App.AceEditor.theme="dracula"
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCluck}>
          {this.state.isTog ? 'Java': 'Kotlin'}
        </button>
        <button onClick={this.handleTheme}>
          {this.state.isTo ? 'Light' : 'Dark'}
        </button>
        <ThemeSwitch/>
        <AceEditor 
          //theme={this.switchTheme}
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