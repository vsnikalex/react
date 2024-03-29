import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // set initial state in constructor
        this.state = {
            date: new Date(),
            isLoggedIn: false
        };
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

    handleLoginClick = () => {
        this.setState(() => ({isLoggedIn: true}));
    }

    handleLogoutClick = () => {
        this.setState(() => ({isLoggedIn: false}));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        const numbers = [1, 2, 3, 4, 5];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} name={this.props.name}/>
                        {button}
                    </div>
                    <div>
                        <h2>It is <code>{this.state.date.toLocaleTimeString()}</code></h2>
                    </div>
                    <div>
                        <NumberList numbers={numbers} />
                    </div>
                </header>
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back {props.name}!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting name={props.name}/>;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default App;
