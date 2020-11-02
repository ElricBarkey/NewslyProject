'use strict';
import ReactDOM from 'react-dom';
import './index.css';
import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';


const e = React.createElement;

class App extends Component {
    render() {
        return<ReactWebMediaPlayer
            width={400} height={400}
            title="Key Notez - Summer"
            thumbnail={"https://nusid.net/album-cover.jpg"}
            audio="https://nusid.net/audio.mp3"
            logo={{
                img: "https://nusid.net/your-logo.png",
                href: "https://www.npmjs.com/package/react-web-media-player"
            }}
        />

    }
}


class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

ReactDOM.render(

    <App />,
    document.getElementById('root')
);
