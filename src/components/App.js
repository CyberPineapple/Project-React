import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: []
        }
    };

    geleteItem = (valueDeleteItem) => {
        const newList = this.state.value.filter((currItem, index, arr) => {
            return index !== arr.indexOf(valueDeleteItem)
        })
        this.setState({
            value: newList
        })
    };
    
    getValue = (data) => {
        this.setState(prevState => {
            return {
                value: prevState.value.concat(data)
            };
        })
    };

    render() {
        return (
            <div>
                <div className="app">
                    <Output value={this.state.value} deleteItem={this.geleteItem}/>
                    <Input addValue={this.getValue} />
                </div>
                <div className="menu"></div>
            </div>
            
        );
    };
}