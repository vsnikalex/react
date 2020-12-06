import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

class OrderState extends React.Component {
    constructor(props) {
        super(props);
        // set initial state in constructor
        this.state = {
            completion: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    tick() {
        // on an event, update state with setState()
        this.setState((state) => ({
            completion: (state.completion + 1) % 101
        }));
    }

    render() {
        return (
            <ProgressBar
                percent={this.state.completion}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
                <Step transition="scale">
                    {({accomplished}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                        />
                    )}
                </Step>
            </ProgressBar>
        );
    }
}

export default OrderState;
