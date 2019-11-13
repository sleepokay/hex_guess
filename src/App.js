import React from 'react';
import './App.css';
import Status from './Status';
import GameBox from './GameBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.updateGameState = this.updateGameState.bind(this);
    }

    updateGameState() {

    }

    // checkGuess() {
    //     if (!this.state.guess || !this.state.answer) {
    //         return;
    //     }
    //     console.log("Guess: " + this.state.guess);
    //     console.log("Answer: " + this.state.answer);
    //     if (this.state.guess === this.state.answer) {
    //         console.log("correct!")
    //     }
    // }

    render() {
        return (
            <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Status />
                <GameBox updateGameState={this.updateGameState} />
            </div>
      );  
    }
}

export default App;