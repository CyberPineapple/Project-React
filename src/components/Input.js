import React from 'react';

export default class Input extends React.Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
    
    onClickEnter = (e) => {
        if (e.key === 'Enter'){
            this.onClick();
        }
    };

    onClick = () => {
        if (this.state.value !== ''){
            const Send = this.props.addValue;
            Send(this.state.value);
            this.setState({
                value: ''
            }); 
        }     
    };

    onChange = (event) => {
        if (event.target.value !=='\n')
        this.setState({
            value: event.target.value
        })
    };
    render() {

        return (
            <div className="input">
                <textarea value={this.state.value} onChange={(event) => this.onChange(event)} onKeyPress={(e)=>this.onClickEnter(e)}></textarea>
                <button onClick={() => this.onClick()}>Отправить</button>
            </div>
        )
    }
}