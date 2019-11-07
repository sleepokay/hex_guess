import React from 'react';
import './App.css';
import Status from './Status';
import ColorBox from './ColorBox';
import GameBox from './GameBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            guess: ""
        }

        this.receiveGuess = this.receiveGuess.bind(this);
        this.receiveAnswer = this.receiveAnswer.bind(this);
    }

    receiveGuess(guess) {
        this.setState({
            guess: guess
        })
        console.log("Guess: " + guess);
        console.log("Answer: " + this.state.answer);
        if (guess === this.state.answer) {
            console.log("correct!")
        }
    }

    receiveAnswer(answer) {
        this.setState({
            answer: answer
        })
    }

    render() {
        return (
            <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Status />
                <ColorBox receiveAnswer={this.receiveAnswer} />
                <GameBox receiveGuess={this.receiveGuess} />
            </div>
      );  
    }
}

export default App;