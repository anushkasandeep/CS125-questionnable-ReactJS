import React, { Component } from 'react';
import "./App.css";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";
import "./components/outputBox";

//import Footer from './components/outputBox';
//import { Segment } from "semantic-ui-react";3

class App extends Component {
  constructor(props) {
    super (props);

    this.state = {isToggleOn: true};
    this.state = {isTog: true};
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
    this.codeToString = this.codeToString.bind(this);
    this.theCode = React.createRef();
    this.state={
      errorMessage:"",
    }
    this.onChange = this.onChange.bind(this);
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
    var newStudentCode = studentCode.replace("\r", "\n")
    this.componentDidMount(newStudentCode);
  }

 
  /*FOR JAVA
  async componentDidMount(args) {
    const response = await fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "label":"slider:a7e0ef3d-5cd8-475b-a60b-91b14c6e39ec:ePUfnfQHeXHitZiwnijKRNupRsiATEri","arguments":{"checkstyle":{"failOnError":true},"snippet":{"indent":2}},"snippet":args,"tasks":["execute","checkstyle","compile"]}),
    })
    var finResponse = JSON.stringify(await response.json());
    this.setState({
      errorMessage:finResponse,
    })
  }
  */

  onChange(newValue) {
    this.setState({newValue: newValue});
  }
  
  async componentDidMount(args) { 
    const response = await fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json; charset=utf-8' },
      body: JSON.stringify({ "label": "questionable-kotlin",
                            "arguments":{"execution":{"klass":"MainKt","method":"main()"}},
                            "sources":[{"path":"Main.kt","contents":args}],
                            "tasks":["execute","kompile"]}),
    })
    //alert(JSON.stringify(await response.json()));
    var finResponse = await response.json();
    var fResponse = JSON.stringify(finResponse);
    var errorResponse = fResponse;
    this.setState({
      errorMessage:errorResponse
    })
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
        //mode="java" 
        mode="kotlin"
        theme="dracula"
        width="575px"
        fontSize="15px"
        ref={this.theCode}
        onChange={this.onChange}
        value={this.state.newValue}
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
        <button onClick={this.codeToString}>
          Run Code
        </button>
        <div className="box">
          COMPILATION STATUS
          <div>
            {this.state.errorMessage}
          </div>
        </div>
      </div>
    );
  }
}  
    
export default App
