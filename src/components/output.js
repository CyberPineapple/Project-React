import React from 'react';
import MessagesContainer from './MessagesContainer.js';
import PictureContainer from './PictureContainer.js';

export default class Output extends React.Component{

    render(){
        let { allItems } = this.props;
        const { deleteItem } = this.props;

        return(
            <div className='output'>
                <MessagesContainer allItems={allItems} deleteItem={deleteItem} />
                {/* <PictureContainer /> */}
            </div>
        )
    };





}
