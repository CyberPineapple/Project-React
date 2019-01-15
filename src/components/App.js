import React from 'react';
import Output from './output.js';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: []
        }
    }

    onClick = () => {

        this.setState(prevState => {
            return {
                list: prevState.list.concat(this.state.value),
                value: ''
            }
        })
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
                <Output value={data} key={id}/>
            </div>
        )

        return (
            <div className="app">
                <div className="output">
                    {arr}
                </div>
                <div className="input">
                    <textarea value={this.state.value} onChange={(event) => this.onChange(event)}></textarea>
                    <button onClick={() => this.onClick()}>Отправить</button>
                </div>
            </div>
        )
    }
}