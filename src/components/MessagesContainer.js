import React from 'react';
import Message from './Message.js'


export default class MessagesContainer extends React.Component{

    render(){
        const { allItems } = this.props;

        const items = allItems.map((currentItem) => 
            <Message item={currentItem} key={currentItem.id} deleteItem={this.props.deleteItem} />
        );

        return (
            <div className='message-container'>
                {items}
            </div>
        );
    };
}

