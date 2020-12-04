import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It is <code>{new Date().toLocaleTimeString()}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
