import React, { Component } from 'react';
class ThemeSwitch extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active: 'false'
        };

        this.css = `
        html { filter: invert(100%); background: fefefe; }
        * {background-color: inherit }
        img:not([src*="svg"]), video { filter: invert(100%) }`;
    }
    isActive = () => {
        this.setState({
            active: !this.isActive()
        });
    }
    render() {
        return (
            <div>
            <button aria-pressed={this.isActive()} onClick={this.toggle}>
                dark theme:
                <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
            </button>
            <style media={this.isActive() ? 'screen' : 'none'}>
                {this.css}
            </style>
        </div>
        );
    }
}
export default ThemeSwitch;