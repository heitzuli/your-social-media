import logo from './logo.svg';
import './App.scss';
import {Feed} from "./Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Feed />
    </div>
  );
}

export default App;
