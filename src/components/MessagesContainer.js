import React from 'react';
import Message from './Message.js'


export default class MessagesContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    render(){
        let { value } = this.props;
        console.log(this.state.list);
            return (
                <div className='message-container'>
                    <Message value={value} addMessageOnList={this.addMessageOnList}/>
                </div>
                )
    };

    addMessageOnList = (value) =>
        this.setState(prevState => {
            return {
                list: prevState.list.concat(value)
            }
        });

}

    // addPicture = (url) => {
    //     this.setState(prevState => {
    //         return {
    //             list: prevState.list.concat('url_' + url)
    //         }
    //     })
    // };

    // clearMessage = (number) => {
    //    let { list } = this.state;
    //    list.splice(number, 1);
    //     this.setState({
    //         list: list
    //     })
    // };

    // getValue = (addValue) => {
    //     this.setState(prevState => {
    //         return {
    //             list: prevState.list.concat(addValue)
    //         }
    //     })
    // };
