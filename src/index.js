import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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


ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
