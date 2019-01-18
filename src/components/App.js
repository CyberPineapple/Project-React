import React from 'react';
import Output from './Output.js';
import Input from './Input.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
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


    clearMessage = (number) => {
        console.log(number);
        let arr = this.state.list;
        console.log(arr);
        arr = arr.splice(number, 1);
        console.log(arr);
        this.setState({
            list: arr
        })
    };

    getValue = (addValue) => {
        // // this.requestToSplashbase();
        // if (addValue[0] !== '/') {
        //     this.setState(prevState => {
        //         return {
        //             list: prevState.list.concat(addValue)
        //         }
        //     });
        // } else {
        //     let command = addValue.substring(0, addValue.indexOf('_', 2));
        //     let flag = addValue.substr((addValue.indexOf('_', 2) + 1));
        //     if (command && flag) {
        //         switch (command) {
        //             case '/clear':
        //                 if (flag === 'all') {
        //                     this.setState({
        //                         list: []
        //                     })
        //                 } else if (flag === 'last') {
        //                     let arr = this.state.list;
        //                     arr.pop();
        //                     this.setState({
        //                         list: arr
        //                     });
        //                 }
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }
        // }
        this.setState(prevState => {
            return {
                list: prevState.list.concat(addValue)
            }
        })
    };

    render() {
        const { list } = this.state;
        const arr = list.map((data, id) =>
            <div className="container-message">
                <Output value={data} key={id} clearMessage={this.clearMessage}/>
            </div>
        )

        return (
            <div className="app">
                <div className="output">
                    {arr}
                </div>
                <Input addValue={this.getValue} />
            </div>
        )
    }
}