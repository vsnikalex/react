import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, {props.name}!</h1>
          <h2>It is <code>{props.date.toLocaleTimeString()}</code></h2>
      </header>
    </div>
  );
}

export default App;
