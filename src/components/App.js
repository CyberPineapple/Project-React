import React from 'react';
import Output from './output.js';
// http://www.splashbase.co/api/v1/images/search?query=
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
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
    


    clearValue = (value) => {
        this.setState({
            value: value
        });
    }

    onClickEnter = (e) => {
        if (e.key === 'Enter'){
            this.onClick();
        }
    };

    onClick = () => {
        // this.requestToSplashbase();
        switch (this.state.value){
            case '/clear':
                this.setState({
                    value: '',
                    list: []
                });
                break;
            case '\n/clear':
                this.setState({
                    value: '',
                    list: []
                });
                break;
            case '':
                this.setState({
                    value: ''
                });
                break;    
            case '\n':
                this.setState({
                    value: ''
                });
                break;
            default:
            this.setState(prevState => {
                return {
                    list: prevState.list.concat(this.state.value),
                    value: ''
                }
            }); 
        }
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    render() {
        const { list } = this.state;
        const arr = list.map((data, id) =>
            <div className="container-message">
                <Output value={data} key={id} clearValue={this.clearValue}/>
            </div>
        )

        return (
            <div className="app">
                <div className="output">
                    {arr}
                </div>
                <div className="input">
                    <textarea value={this.state.value} onChange={(event) => this.onChange(event)} onKeyPress={(e)=>this.onClickEnter(e)}></textarea>
                    <button onClick={() => this.onClick()}>Отправить</button>
                </div>
            </div>
        )
    }
}