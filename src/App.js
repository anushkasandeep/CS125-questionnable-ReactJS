import React, { Component } from 'react';
import "./App.css";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {isToggleOn: true};
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
  
  
  /*Dacaller() {
    return (axios.post("https://cs125-cloud.cs.illinois.edu/jeed/", 'Content-Type: application/json', '{"label":"slider:a7e0ef3d-5cd8-475b-a60b-91b14c6e39ec:ePUfnfQHeXHitZiwnijKRNupRsiATEri","arguments":{"checkstyle":{"failOnError":true},"snippet":{"indent":2}},"snippet":"var sum = 0;\nfor (int i = 0; i < 30; i++) {\n  sum += i;\n}\nSystem.out.println(sum);\n","tasks":["execute","checkstyle","compile"]}')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    }));
  }*/

  Dacaller() {
    return (axios.post("https://jsonplaceholder.typicode.com/posts", '{"userId": "1", "title": "mybody", "body: "head shoulders knees and toes"}')
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    }))
  }



  render() {
    //const response = axios.post('https://jsonplaceholder.typicode.com/posts', '{"userId": "1", "title": "mybody", "body: "head shoulders knees and toes"}')
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
          //mode="kotlin"
          theme="dracula"
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
        </button>
        <h1>
          {this.Dacaller}
        </h1>
      </div>
    );
  }
}      
export default App