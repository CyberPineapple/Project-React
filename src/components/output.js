import React from 'react';
import MessagesContainer from './MessagesContainer.js';
import PictureContainer from './PictureContainer.js';

export default class Output extends React.Component{

    render(){
        return(
            <div className='output'>
                <MessagesContainer value={this.props.value} />
                <PictureContainer />
            </div>
        )
    }





}
