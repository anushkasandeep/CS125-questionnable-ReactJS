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
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleCluck = () => {
    AceEditor.mode="kotlin";
  }

  render() {
    return (
      <div className="App">
        <button onCluck={this.handleCluck}>
          Kotlin
        </button>
        <AceEditor 
          theme="dracula"
          mode="java"
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
      </div>
    );
  }
}
export default App