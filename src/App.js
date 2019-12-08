import React, { Component } from 'react';
import ReactAce from 'react-ace-editor';
import logo from './logo.svg';
import './App.css';
// this class for testing whether ReactAce works and looks like the code compiles
class CodeEditor extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  // trying to create a new instance of ace editor
  onChange(newValue, e) {
    console.log(newValue, e);

    const editor = this.ace.editor; //The editor object is from Ace's API
    console.log(editor.getValue()); // outputs the value of the editor
  }
  // rendering the whole instance 
  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="eclipse"
        setReadOnly="false"
        onChange={this.onChange}
        style={{height: '400px'}}
        ref={instance => {this.ace = instance;}}
      />
    );
  }
}

//this class is for the buttons and tables
//TODO: took out the code for creating the textbox since it seemed buggy. will figure that out later once i'm sure react ace works
//TODO: i should probably render the textbox and buttons in the ace editor tag in the class "CodeEditor". I think that's the whole point of ace editor.
// as students type their code in the regular textbox, the same code is being typed in the actual code (probably as a string) at the backend which parses 
//the code and runs in the compiler?
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Your Code' : 'Your Solution'}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
export default CodeEditor;