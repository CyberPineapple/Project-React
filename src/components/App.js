import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            list: []
        }
    }

    onClickHandler = () => {
        this.setState( prevState => {
            return {
                list: prevState.list.concat(this.state.value)
            } 
        })
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    render() {
        const { value, list } = this.state;
        let arr = [];
        for ( let index in list) {
            var temp = (
            <li key={ index }>
                { list[index] }
            </li>)
            arr.push(temp);
        }

        return (
            <div>
                <ul>
                    { arr }
                </ul>
                <textarea
                    value={value}
                    onChange={(event) => this.handleChange(event)}
                />
                <button onClick={() => this.onClickHandler()}>Отправить</button>
            </div>
        );
    }
}