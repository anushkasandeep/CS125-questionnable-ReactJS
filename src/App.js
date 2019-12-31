import React, { Component } from 'react';
import './App.css';
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
      <div className="App">
        <button onClick={this.handleCluck}>
          {this.state.isTog ? 'Java': 'Kotlin'}
        </button>
        <AceEditor 
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

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
      localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
      const isReturningUser = "dark" in localStorage;
      const savedMode = JSON.parse(localStorage.getItem("dark"));
      const userPrefersDark = getPrefColorScheme();

      if (isReturningUser) {
          return savedMode;
      } else if (userPrefersDark) {
          return true;
      } else {
          return false;
      }

      function getPrefColorScheme() {
          if (!window.matchMedia) return;

          return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
  }
  return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
          <nav>
              <div className="toggle-container">
                  <span style={{ color : darkMode ? "grey" : "yellow"}}>☀︎</span>
                  <span className="toggle">
                      <input
                          checked={darkMode}
                          onChange={() => setDarkMode(prevMode => !prevMode)}
                          id="checkbox"
                          className="checkbox"
                          type="checkbox"
                      />
                      <label htmlFor="checkbox" />
                  </span>
              </div>
          </nav>
      </div>
  );
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App