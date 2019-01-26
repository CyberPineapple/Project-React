import React from 'react';
import MessagesContainer from './MessagesContainer.js';
import PictureContainer from './PictureContainer.js';

export default class Output extends React.Component{

    render(){
        let { listMessage } = this.props;
        const { clearMessage } = this.props;

        return(
            <div className='output'>
                <MessagesContainer listMessage={listMessage} clearMessage={clearMessage} />
                <PictureContainer />
            </div>
        )
    };





}
