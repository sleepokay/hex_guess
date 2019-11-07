import React from 'react';

class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.generateHex()
        };
    }

    generateHex() {
        const color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.props.receiveAnswer(color);
        return color;
    }

    render() {
      return (
        <div id="colorbox" style={{backgroundColor: this.state.color, height: "200px", width: "200px"}}>
        </div>
      );  
    }
}

export default ColorBox;