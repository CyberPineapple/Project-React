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
        console.log(this.props.value);
        
        return (
            <div className='message-container'>
            </div>
        )
    };

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
