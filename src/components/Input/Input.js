import React from 'react';
import input from './input.module.css';
import axios from 'axios';

export default class Input extends React.Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
    
    render() {
        return (
            <div className={input.layout}>
                <textarea className={input.textarea} value={this.state.value} onChange={(event) => this.onChange(event)} onKeyPress={(e)=>this.onClickEnter(e)}></textarea>
                <button className={input.button} onClick={() => this.onClick()}>Отправить</button>
            </div>
        )
    };

    handlerCommand = (value) => {
        let command = value.substring(0, value.indexOf('_', 2));
        let flag = value.substr((value.indexOf('_', 2) + 1));
        switch (command){
            case '/pic':
                if (flag){
                    this.requestToSplashbase(flag);
                    this.setState({
                        value: ''
                    });
                }
                break;
            case '/clear':
                if (flag === 'all'){
                    this.props.deleteItem(flag);
                    this.setState({
                        value: ''
                    });
                }
                break;
            default:
                break;             
        }
    };

    requestToSplashbase = (flag) => {
        axios.get('http://www.splashbase.co/api/v1/images/search?query=' + flag)
        .then( response => {
            this.props.getItem({
                'value': response.data.images[0].url,
                'pic': true,
                'id': Date.now()
            });
        })
        .catch( error => {
            alert('error: ', error);
        })
    };

    onClick = () => {
        let { value } = this.state;
        if (value[0] === '/'){
            this.handlerCommand(value);
            this.setState({
                value: ''
            });
        } else if (value !== ''){
            this.props.getItem({
                'value': value,
                'pic': false,
                'id': Date.now()
            });
            this.setState({
                value: ''
            }); 
        }     
    };

    onClickEnter = (e) => {
        if (e.key === 'Enter'){
            this.onClick();
        }
    };

    onChange = (event) => {
        if (event.target.value !=='\n'){
            this.setState({
                value: event.target.value
            })
        }
    };

}