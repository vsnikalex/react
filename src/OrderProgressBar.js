import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

class OrderProgressBar extends React.Component {
    constructor(props) {
        super(props);

        // TODO: mapping statusName => progressBar index to identify failed stages

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
        const failIcon = "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16618812301557740370-512.png";

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
                            src={(index !== this.state.failedStage) ? "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/12452524521579156634-512.png" :
                                failIcon}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/1037445041581065986-512.png" :
                                failIcon}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/12599184281553508380-512.png" :
                                failIcon}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/9554909541606428216-512.png" :
                                failIcon}
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({accomplished, index}) => (
                        <img
                            style={{filter: `grayscale(${accomplished ? 0 : 80}%)`}}
                            width="30"
                            src={(index !== this.state.failedStage) ? "https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/2445356421579060773-512.png" :
                                failIcon}
                        />
                    )}
                </Step>
            </ProgressBar>
        );
    }
}

export default OrderProgressBar;
