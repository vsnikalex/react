import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

class OrderProgressBar extends React.Component {
    constructor(props) {
        super(props);
        // set initial state in constructor
        this.state = {
            completion: 0,
            failedStage: null
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.nextStage(),
            1000
        );
    }

    nextStage() {
        // on an event, update state with setState()
        if (!this.state.failedStage) {
            this.setState((state) => ({
                completion: state.completion < 100 ? (state.completion + 25) : 0,
                failedStage: (state.completion + 25) === 50 ? 2 : null
            }));
        }
    }

    render() {
        return (
            <ProgressBar
                percent={this.state.completion}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                hasStepZero={true}
            >
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" :
                                "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png"}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" :
                                "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png"}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" :
                                "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png"}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" :
                                "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png"}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" :
                                "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png"}
                        />
                    )}
                </Step>
            </ProgressBar>
        );
    }
}

export default OrderProgressBar;
