import React, { Component } from 'react';
import "./App.css";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {isToggleOn: true};
    this.state = {isTog: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
    this.codeToString = this.codeToString.bind(this);
    this.theCode = React.createRef();
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

  codeToString() {
    var studentCode = JSON.stringify(this.theCode.current.editor.getValue());
    this.componentDidMount(studentCode);
  }

  async componentDidMount(args) {
    const response = await fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "label":"slider:a7e0ef3d-5cd8-475b-a60b-91b14c6e39ec:ePUfnfQHeXHitZiwnijKRNupRsiATEri","arguments":{"checkstyle":{"failOnError":true},"snippet":{"indent":2}},"snippet":args,"tasks":["execute","checkstyle","compile"]}),
    })
    console.log(JSON.stringify(await response.json()));
  }

  render() {
    return (
      <div className="light-mode">
        <div className="toggle-container">
          <span /*style={{color: this.themeSwitch() ? "black" : "yellow"}}*/>☀︎</span>
          <span className="toggle">
            <input
              //checked={darkMode}
              //onChange={() => setDarkMode(isToggle => !darkMode.isToggle)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
        </div>
        <button onClick={this.handleCluck}>
          {this.state.isTog ? 'Java': 'Kotlin'}
        </button>        
        <AceEditor
        mode="java"
        theme="dracula"
        ref={this.theCode}
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
        <button onClick={this.codeToString}>
          Run Code
        </button>
      </div>
    );
  }
}      
export default App


// i write code in ace editor. editor's state keeps changing. i don't want instantaneous change of state.
// when i click the run button, the final instance of ace editor should be passed into the function probably as an argument and the function would get the value of that instance
// that function return the getValue as a string

// 2 functions! 
// function 1: function 1 stores the current state of ace editor. 

//ace editor passes its current instance to funct1. funct1 holds state of ace editor and returns the value of that instance
// button activated functTwo which 

// you actually didn't need the first function to constantly store the state.
// refs would do that job for you 
// refs are appropriate to use when a function wants to access something from the rendered elements.
// this is the opposite of what usually happens where the rendered elements access the functions

//the jeed response:
// 