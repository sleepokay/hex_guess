import React from 'react';
import './App.css';
import Status from './Status';
import ColorBox from './ColorBox';
import GameBox from './GameBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {
      return (
        <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Status />
            <ColorBox />
            <GameBox />
        </div>
      );  
  }
}

export default App;