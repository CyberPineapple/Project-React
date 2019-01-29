import React from 'react';
import MessagesContainer from './MessagesContainer.js';
import PictureContainer from './PictureContainer.js';

export default class Output extends React.Component {

    render() {
        let { allItems, showPictures } = this.props;
        const { deleteItem } = this.props;
        let showObject;
        if (showPictures === true) {
            showObject = <PictureContainer allItems={allItems} closePictureContainer={this.props.closePictureContainer} />;
        } else if (showPictures === false) {
            showObject = <MessagesContainer allItems={allItems} deleteItem={deleteItem} />;
        }

        return (
            <div className='output'>
                {showObject}
            </div>
        )
    };





}
