import React from 'react';

export default class Picture extends React.Component{

    render() {
        
        return (
            <img className="picture-on-container" src={this.props.value.value} onClick={() => this.getPicture()}></img>
        );
    };

    getPicture = () => {
        const { value, getItem } = this.props;
        getItem({
            'value': value.value,
            'pic': true,
            'id': Date.now()
        });
    };
}