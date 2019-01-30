import React from 'react';
import Picture from '../Picture/Picture.js';


export default class PictureContainer extends React.Component{

    

    render(){
        
        let arrayPictures = this.props.allItems.filter((item, id, arr) => {
            return item.pic !== false;
        });

        const listPictures = arrayPictures.map((item, id, arr) => <Picture value={item} key={item.id} getItem={this.props.getItem} />);
        return (
            <div className="picture-container">
                {listPictures}
            </div>
        )
    };
};