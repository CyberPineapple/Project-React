import React from 'react';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            clickedMessage: false
        }
    }

    render() {
        const { item } = this.props;
        const { clickedMessage } = this.state;

        let className = "message",
            classButton = "messageButton",
            itemContainer;

        if (clickedMessage) {
            className += " clicked";
            classButton = "message-button-click"
        }
        
        if (item.pic === false){
            itemContainer = item.value;
        } else if (item.pic === true){
            itemContainer = <img src={item.value} className='message-picture'></img>;
        }
        

        return (
            <div className={className} onClick={this.onClickHandler()}>
                {itemContainer}
                <div className={classButton} onClick={()=>this.onClickDelete()}></div>
            </div>
        );
    }

    onClickHandler = () => () => {
        this.setState({
            clickedMessage: !this.state.clickedMessage
        })
    };

    onClickDelete = () => {
        const { item, deleteItem } = this.props;
        deleteItem(item);
    };


}