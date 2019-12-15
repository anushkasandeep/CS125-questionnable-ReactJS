import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Ace } from 'ace-builds';
export default class Main extends Component {
    render() {
        return (
            <div>
                <AceEditor />
            </div>
        );
    }
}