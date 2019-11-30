import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      value: 'Type your code here'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      event.preventDefault();
//to be continued
    }));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} /> 
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Your Code'}
            </button>
        </header>
      </div>
    );
  }
}

export default App;
// adding commennt for testing

