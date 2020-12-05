import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends React.Component {
    constructor(props) {
        super(props);
        // set initial state in constructor
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // on an event, update state with setState()
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Hello, {this.props.name}!</h1>
                    <h2>It is <code>{this.state.date.toLocaleTimeString()}</code></h2>
                    <Toggle />
                </header>
            </div>
        );
    }
}

export default App;
