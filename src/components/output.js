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
        const clear = this.props.clearValue;
        clear(this.state.clickedMessage); //hook
        this.setState({
            clickedMessage: !this.state.clickedMessage
        })
    }

    render() {
        const {value, key} = this.props;
        const {clickedMessage} = this.state;
        let className = "message";
        if (clickedMessage) {
            className += " clicked";
        }

        return (
            <div className={className} key={key} onClick={this.onClickHandler()}>
                {value}
            </div>
        );
    }
}
