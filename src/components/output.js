import React from'react';



export default class Output extends React.Component {

    render(){
        const arrayMessage=this.props.arrayMessage;

        return (
            <div className="output">
                    <div className="container-message">
                        {arrayMessage}
                    </div>
            </div>
        );
    }



}
