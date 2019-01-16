import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    // requestToSplashbase = () => {
    //    let request = new XMLHttpRequest();
    //     request.open('GET', 'http://www.splashbase.co/api/v1/images/search?query=cat', false);
    //     request.send();
    //     // if (request.responseText.image)
    //     let a = JSON.parse(request.responseText)
    //     console.log(a.images[1].url);
    // }

    GetValue = (addValue) => {
        // this.requestToSplashbase();
        switch (addValue){
            case '/clear':
                this.setState({
                    list: []
                });
                break;
            default:
            this.setState(prevState => {
                return {
                    list: prevState.list.concat(addValue)
                }
            }); 
        }
    };

    render() {
        const { list } = this.state;
        const arr = list.map((data, id) =>
            <div className="container-message">
                <Output value={data} key={id} />
            </div>
        )

        return (
            <div className="app">
                <div className="output">
                    {arr}
                </div>
                <Input addValue = {this.GetValue} />
            </div>
        )
    }
}