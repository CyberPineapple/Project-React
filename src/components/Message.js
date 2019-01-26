import React from 'react';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            clickedMessage: false
        }
    };

    onClickHandler = () => () => {
        this.setState({
            clickedMessage: !this.state.clickedMessage
        })
    };

    onClickDelete = () => {
        const { deleteItem, messageObject } = this.props;
        deleteItem(messageObject);
    };

    render() {
        const { messageObject } = this.props;
        const { clickedMessage } = this.state;

        let className = "message",
            classButton = "messageButton",
            dataContainer;

        if (clickedMessage) {
            className += " clicked";
            classButton = "message-button-click"
        }

        if (messageObject.pic === true){
            dataContainer = (
                <img 
                    src={messageObject.value}
                    className='app-picture'>
                </img>);
        } else if (messageObject.pic === false){
            dataContainer = messageObject.value;
        }
        
        return (
            <div className={className} onClick={this.onClickHandler()}>
                {dataContainer}
                <div className={classButton} onClick={()=>this.onClickDelete()}></div>
            </div>
        );
    }
}