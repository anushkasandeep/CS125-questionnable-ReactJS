import React, { Component } from 'react';
import "./App.css";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-dracula";
import "./components/outputBox";

class App extends Component {
  constructor(props) {
    super (props)

    this.ace = React.createRef()
    this.state = {
      output: "",
      value: ""
    }
  }

  /*codeToString() {
    console.log(this.theCode.current.editor.getValue());
    //var studentCode = JSON.stringify(this.theCode.current.editor.getValue());
    var studentCode = this.theCode.current.editor.getValue();
    //var newStudentCode = studentCode.replace("\r", "\n")
    var slicedCode = studentCode.slice(1, studentCode.length - 1);
    console.log(slicedCode);
    this.theOutputFunction(slicedCode);
  }*/

 
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

  run = () => {
    const code = this.ace.current.editor.getValue()
    const request = { 
      label: "questionable-kotlin", 
      arguments:{"execution":{"klass":"MainKt","method":"main()"}},
      sources:[{"path":"Main.kt","contents":code}],
      tasks:["execute","kompile"]
    };

    console.log(request);
    fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json; charset=utf-8' },
      body: JSON.stringify(request),
    }).then((response) => {
      return response.json()
    }).then((result) => {
      console.log(result)
      this.setState({ output: code })
    })
  }

  onChange = (value) => {
    this.setState({ value })
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
        <AceEditor
        //mode="java" 
        mode="kotlin"
        theme="dracula"
        width="575px"
        fontSize="15px"
        onChange={this.onChange}
        ref={this.ace}
        value={this.state.value}
        />
        <button onClick={this.run}>
          Run Code
        </button>
        <div className="box">
          COMPILATION STATUS
          <div>
            {this.state.output}
          </div>
        </div>
      </div>
    );
  }
}  
    
export default App

// call this.setState


  /*async componentDidMount(args) { 
    console.log(args);
    const request = { "label": "questionable-kotlin", "arguments":{"execution":{"klass":"MainKt","method":"main()"}},"sources":[{"path":"Main.kt","contents":args}],"tasks":["execute","kompile"]};
    console.log(theRequest);
    const response = await fetch("https://cs125-cloud.cs.illinois.edu/jeed/", {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json; charset=utf-8' },
      /*body: JSON.stringify({ "label": "questionable-kotlin",
                            "arguments":{"execution":{"klass":"MainKt","method":"main()"}},
                            "sources":[{"path":"Main.kt","contents":args}],
                            "tasks":["execute","kompile"]}),*/
      //body: JSON.stringify(theRequest),
    //});
    //const finResponse = await response.json();
    //console.log(finResponse);
    //const errorResponse = JSON.stringify((finResponse.failed.kompilation.errors).map(element => element.location));
    //const errorMessage = JSON.stringify((finResponse.failed.kompilation.errors).map(element => element.message));
    //const errorResponse = JSON.stringify((finResponse.failed.kompilation.errors));
    //this.setState({
      //errorMessage: errorResponse
    //});
  //}