import React from 'react';
import Message from './Message.js'

export default class MessagesContainer extends React.Component{
    render(){
        const {allMessages} = this.props;

        const messages = allMessages.map((currentElement) =>
            <Message messageObject={currentElement} key={currentElement.id} deleteItem={this.props.deleteItem}/>
        )

        return (
            <div className='message-container'>
                {messages}
            </div>
        );
    };
}