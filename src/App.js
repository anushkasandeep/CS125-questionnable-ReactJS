import React, { Component } from 'react';
import "./App.css";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";
import "./components/Dacaller";

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

  render() {
    return (
      <div className="dark-mode">
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
        <Dacaller/>
      </div>
    );
  }
}      
export default App