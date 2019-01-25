import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            picture: ''
        }
    }

    render() {
        return (
            <div>
                <div className="app">
                    <Output value={this.state.value} picture={this.state.picture} />
                    <Input addValue={this.getValue} addPicture={this.getPicture} />
                </div>
                <div className="menu"></div>
            </div>
            
        )
    };

    getValue = (data) => {
        this.setState({
            value: data
        })
    };

    addPicture = (data) => {
        this.setState({
            picture: data
        })
    };
  
}