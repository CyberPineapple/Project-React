import React from 'react';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            clickedMessage: false
        }
    }

    render() {
        
        let { value } = this.props;
        const {clickedMessage, key} = this.state;
        let className = "message";
        let classButton = "messageButton"
        if (clickedMessage) {
            className += " clicked";
            classButton = "message-button-click"
        }
        if (value.substr(0, 4) == 'url_'){
            let url = value.substr((value.indexOf('_', 2) + 1));
            value = <img src={url} className='message-picture'></img>
        }
        

        return (
            <div className={className} key={key} onClick={this.onClickHandler()}>
                {value}
                <div className={classButton} onClick={()=>this.onClickDelete()}></div>
            </div>
        );
    }

    onClickHandler = () => () => {
        this.setState({
            clickedMessage: !this.state.clickedMessage
        })
    };

    onClickDelete = () => {
        const { key, clearMessage } = this.props;
        clearMessage(key);
    };


}