import React from 'react';

class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: ""
        };

        this.updateGuess = this.updateGuess.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
    }

    updateGuess(e) {
        this.setState({
            guess: e.currentTarget.value
        });
    }

    submitGuess() {
        this.props.receiveGuess(this.state.guess);
    }

    render() {
      return (
        <div id="gamebox">
            <input type="text" value={this.state.guess} onChange={this.updateGuess} />
            <input type="button" value="ok" onClick={this.submitGuess} />
        </div>
      );
    }
}

export default GameBox;