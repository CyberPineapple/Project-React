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
            this.props.addValue(this.state.value);
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

    getValue = (addValue) => {
        // this.requestToSplashbase();
        if (addValue[0] !== '/') {
            this.setState(prevState => {
                return {
                    list: prevState.list.concat(addValue)
                }
            });
        } else {
            let command = addValue.substring(0, addValue.indexOf('_', 2));
            let flag = addValue.substr((addValue.indexOf('_', 2) + 1));
            if (command && flag) {
                switch (command) {
                    case '/clear':
                        if (flag === 'all') {
                            this.setState({
                                list: []
                            })
                        } else if (flag === 'last') {
                            let arr = this.state.list;
                            arr.pop();
                            this.setState({
                                list: arr
                            });
                        }
                        break;
                    default:
                        break;
                }
            }
        }
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