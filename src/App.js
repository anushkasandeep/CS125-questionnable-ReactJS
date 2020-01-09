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
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
    this.jeedCaller = this.jeedCaller.bind(this);
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

  // add functionality to the button. when it gets clicked, it should call componentDidMount() and POST what's written in ACE EDITOR as a string in "snippet"
  //1) create the button
  //2) create function that parses the entire string and returns the parsed string
  //3) call that function in componentDidMount()
  jeedCaller() {
    var editor = ace.edit("aceEditor");
    var code = editor.getValue();
    return <h1>{code}</h1>
  }

  async componentDidMount() {
    const response = await fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "label":"slider:a7e0ef3d-5cd8-475b-a60b-91b14c6e39ec:ePUfnfQHeXHitZiwnijKRNupRsiATEri","arguments":{"checkstyle":{"failOnError":true},"snippet":{"indent":2}},"snippet":"var sum = 0;\nfor (int i = 0; i < 30; i++) {\n  sum += i;\n}\nSystem.out.println(sum);\n","tasks":["execute","checkstyle","compile"]}),
    })
    console.log(await response.json())
  }

  /*<AceEditor
  mode="java"
  theme="dracula"
  />*/


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
        <div id="editor" style="height: 500px; width: 500px">some text</div>
        <script src="src/ace.js" type="text/javascript" charset="utf-8"></script>
        <script>
          var editor = ace.edit("editor");
        </script>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
        <button onClick={this.jeedCaller}>
          Submit Code
        </button>
        <h1>
          {this.jeedCaller()}
        </h1>
      </div>
    );
  }
}      
export default App