import React from 'react';

class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.generateHex()
        }
    }

    generateHex() {
        return '#'+Math.floor(Math.random()*16777215).toString(16)
    }

    render() {
      return (
        <div id="colorbox" style={{backgroundColor: this.state.color, height: "200px", width: "200px"}}>
        </div>
      );  
    }
}

export default ColorBox;