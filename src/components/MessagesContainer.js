import React from 'react';
import Message from './Message.js'


export default class MessagesContainer extends React.Component{

    render(){
        let { listMessage } = this.props;
        const { clearMessage } = this.props;
        
        const arr = listMessage.map((data, id) => {
            return <Message value={data} key={id.toString()} clearMessage={clearMessage} />
        })

        return (
            <div className='message-container'>
                {arr}
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
