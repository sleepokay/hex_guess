import React from 'react';
import ColorBox from './ColorBox';

class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            guess: ""
        };

        this.updateGuess = this.updateGuess.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
        this.receiveAnswer = this.receiveAnswer.bind(this);
    }

    receiveAnswer(answer) {
        this.setState({
            answer: answer
        });
    }

    updateGuess(e) {
        this.setState({
            guess: e.currentTarget.value
        });
    }

    submitGuess(e) {
        e.preventDefault();
        this.props.updateGameState(this.state.guess);
    }

    render() {
        return (
            <div id="gamebox">
                <ColorBox receiveAnswer={this.receiveAnswer} />
                <form onSubmit={this.submitGuess}>
                    <input type="text" value={this.state.guess} onChange={this.updateGuess} />
                    <input type="button" value="ok" onClick={this.submitGuess} />
                </form>
            </div>
        );
    }
}

export default GameBox;