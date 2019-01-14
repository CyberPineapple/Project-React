import React from 'react';
import "../styles/app.css";
import Output from './output.js';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: [],
            // item: '',
            // selectedItem: [],
            // click: ''
        }
    }





    // onClickMessage = (event) => {
    //     this.setState({
    //             click: "Click"
    //     })
    // };



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
            <div className="message" key={id}>
                {data}
            </div>
        )
        return (
            <div className="app">
                <Output arrayMessage={arr}/>
                <div className="input">
                    <textarea value={this.state.value} onChange={(event)=>this.onChange(event)}></textarea>
                    <button onClick={()=>this.onClick()}>Отправить</button>
                </div>
            </div>
        )
    }
}