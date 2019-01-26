import React from 'react';

export default class PictureContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            picture: []
        }
    };

    render(){
        return (
            <div className='picture'>
            </div>
        );
    };
}