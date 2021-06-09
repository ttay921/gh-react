import React, { Component } from "react";


class Lights extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Click happened');
        document.getElementById("myReel").classList.toggle("visible");
    }
    render() {
        return (

            <div className="reel" style={{ width: '80vw', padding: '75% 0 0 0', position: 'relative' }} >
                <iframe title="reel" id="myReel" src="https://player.vimeo.com/video/448913927"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
                    onClick={this.handleClick}

                >

                </iframe>

                <script
                    src="https://player.vimeo.com/api/player.js"

                >

                </script>

            </div>


        )
    }
}
export default Lights;