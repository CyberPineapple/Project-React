import React from 'react';



export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        const {showPictures} = this.props;
        let text;
        if (showPictures === true){
            text = 'Назад';
        } else if (showPictures === false){
            text = 'Использованные картинки'
        }

        return (
            <div className="menu">
                <button className="menu-button" onClick={() => this.props.showPictureContainer()}>{text}</button>
                <button className="menu-button" onClick={() => this.props.deleteItem('all')}>Очистить</button>
                <textarea className="menu-textarea" value={this.state.value} onChange={(event)=>this.onChange(event)}
                    onKeyPress={(e)=>this.onClickEnter(e)}></textarea>
                <button className="menu-button" onClick={() => this.onClick()}>Добавить картинку</button>
            </div>
        )
    }

    requestToSplashbase = (flag) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://www.splashbase.co/api/v1/images/search?query=' + flag, false);
        request.send();
        let a = JSON.parse(request.responseText);
        if (a.images[0] === undefined ){
            return 'https://failopomoika.com/forums/monthly_03_2015/user40498/post1242227_img1_1_8742f08ce00fd82f482b9dbed019166c.jpg';
        } else {
            return a.images[0].url;
        }
    };

    onClick = () => {
        let { value } = this.state;
        const { getItem } = this.props;
        if (value !== ''){
            getItem({
                'value': this.requestToSplashbase(value),
                'pic': true,
                'id': Date.now()
            });
            this.setState({
                value: ''
            }); 
        }     
    };

    onClickEnter = (e) => {
        if (e.key === 'Enter'){
            this.onClick();
        }
    };

    onChange = (event) => {
        if (event.target.value !=='\n'){
            this.setState({
                value: event.target.value
            })
        }
    };
}