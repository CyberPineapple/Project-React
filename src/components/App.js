import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            listMessage: [],
            pictures: []
        }
    }

    render() {
        
        return (
            <div>
                <div className="app">
                    <Output listMessage={this.state.listMessage} picture={this.state.picture} clearMessage={this.clearMessage} />
                    <Input addValue={this.getValue} addPicture={this.getPicture} clearMessage={this.clearMessage} />
                </div>
                <div className="menu"></div>
            </div>
            
        )
    };

    getValue = (data) => {
        this.setState(prevState =>{
            return {
                listMessage: prevState.listMessage.concat(data)
            }
        })
    };

    getPicture = (url) => {
        this.setState(prevState => {
            return {
                listMessage: prevState.listMessage.concat('url_' + url),
                pictures: prevState.pictures.concat(url)
            }
        })
    };

    clearMessage = (key) => {
        if (key == 'all'){
            this.setState({
                listMessage: []
            })
        } else {
            let { listMessage } = this.state;
            let list = listMessage;
            list = list.splice(key, 1);
            this.setState({
                listMessage: list
            })
        };
    };
  
}