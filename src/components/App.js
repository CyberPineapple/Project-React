import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            allItems: [],
        }
    }

    render() {
        console.log(this.state.allItems);
        
        return (
            <div>
                <div className="app">
                    <Output allItems={this.state.allItems} deleteItem={this.deleteItem} />
                    <Input getItem={this.getItem} deleteItem={this.deleteItem} />
                </div>
                <div className="menu"></div>
            </div>
            
        );
    };

    getItem = (data) => {
        this.setState(prevState =>{
            return {
                allItems: prevState.allItems.concat(data)
            }
        });
    };

    deleteItem = (valueDeleteItem) => {
        if (valueDeleteItem === 'all'){
            this.setState({
                allItems: []
            })
        } else {
            let { allItems } = this.state;

            const list = allItems.filter((currItem ,id, arr) => {
                return id != arr.indexOf(valueDeleteItem);
            });

            this.setState({
                allItems: list
            })
        };
    };
  
}