import React from 'react';
import "./app.css"

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: [],
            click: "message"
        }
    }


    // clearMessage = () =>{

    //     this.state.value = '/clear';
    //     this.setState({list: []});
    // };



    onClickMessage = () => {
        this.setState({
               click: "Click" 
        })
    };



    onClickHandler = () => {
        this.setState(prevState => {
            return {
                list: prevState.list.concat(this.state.value),
                value: ''
            }
        })
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };





    render() {
        const { value, list, click } = this.state;
        let arr = [];
        for (let index in list) {
            var temp = (
                <div className={click} key={index} onClick={() => this.onClickMessage()}>
                    {list[index]}
                </div>)
            arr.push(temp);
        }

        return (
            <div className="app">
                <div className="output">
                    <div className="container-message">
                        {arr}
                    </div>
                </div>
                <div className="input">
                    <textarea
                        value={value}
                        onChange={(event) => this.handleChange(event)}
                    />

                    <button onClick={() => this.onClickHandler()}>Отправить</button>
                </div>
            </div>
        );
    }
}