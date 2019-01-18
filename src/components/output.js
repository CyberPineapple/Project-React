import React from 'react';

export default class Output extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            clickedMessage: false
        }
    }

    onClickHandler = () => () => {
        this.setState({
            clickedMessage: !this.state.clickedMessage
        })
        console.log(this.state.key);
    };

    onClickDelete = () => {
        const deleteMessage = this.props.clearMessage;
        deleteMessage(this.props.key);
    };

    render() {
        const {value, key } = this.props;
        const {clickedMessage} = this.state;
        let className = "message";
        let classButton = "messageButton"
        if (clickedMessage) {
            className += " clicked";
            classButton = "messageButton-click"
        }
        

        return (
            <div className={className} key={key} onClick={this.onClickHandler()}>
                {value}
                <button className={classButton} onClick={()=>this.onClickDelete()}>—</button>
            </div>
        );
    }
}
