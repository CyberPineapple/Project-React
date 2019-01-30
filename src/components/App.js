import React from 'react';
import Output from './Output/Output.js';
import Input from './Input/Input.js';
import Menu from './Menu/Menu.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            allItems: [],
            showPictures: false
        }
    }

    render() {
        return (
            <div className="app">
                <div className="app-view">
                    <Output allItems={this.state.allItems} deleteItem={this.deleteItem} 
                        showPictures={this.state.showPictures} getItem={this.getItem} />
                    <Input getItem={this.getItem} deleteItem={this.deleteItem} />
                </div>
                <Menu showPictureContainer={this.showPictureContainer} showPictures={this.state.showPictures} 
                    deleteItem={this.deleteItem} getItem={this.getItem}/>
            </div>
        );
    };

    showPictureContainer = () => {
        this.setState({
            showPictures: !this.state.showPictures
        })
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
                return id !== arr.indexOf(valueDeleteItem);
            });

            this.setState({
                allItems: list
            })
        };
    };
  
}