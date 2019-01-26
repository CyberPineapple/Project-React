import React from 'react';

export default class Input extends React.Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
    
    render() {
        return (
            <div className="input">
                <textarea value={this.state.value} onChange={(event) => this.onChange(event)} onKeyPress={(e)=>this.onClickEnter(e)}></textarea>
                <button className="input-button" onClick={() => this.onClick()}>Отправить</button>
            </div>
        )
    }


    handlerCommand = (value) => {
        let command = value.substring(0, value.indexOf('_', 2));
        let flag = value.substr((value.indexOf('_', 2) + 1));
        switch (command){
            case '/pic':
                if (flag){
                    this.props.addPicture(this.requestToSplashbase(flag));
                    this.setState({
                        value: ''
                    });
                }
                break;
            case '/clear':
                this.props.clearMessage(flag);
                this.setState({
                    value: ''
                });
                break;
            default:
                break;             
        }
    };

    requestToSplashbase = (flag) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://www.splashbase.co/api/v1/images/search?query=' + flag, false);
        request.send();
        let a = JSON.parse(request.responseText);
        if (a.images[0] == undefined ){
            return 'https://failopomoika.com/forums/monthly_03_2015/user40498/post1242227_img1_1_8742f08ce00fd82f482b9dbed019166c.jpg';
        } else {
            return a.images[0].url;
        }
    };

    onClick = () => {
        let { value } = this.state;
        if (value[0] === '/'){
            this.handlerCommand(value);
            this.setState({
                value: ''
            });
        } else if (value !== ''){
            this.props.addValue(value);
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