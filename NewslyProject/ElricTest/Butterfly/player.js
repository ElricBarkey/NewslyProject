

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactWebMediaPlayer from "react-web-media-player";


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



    ReactDOM.render(

            <App />,
        document.getElementById('player')
    );


