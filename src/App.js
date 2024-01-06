import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="App-body">
            <Welcome />
            <MyInput />
        </div>
    </div>
  );

  function Welcome() {
    return (
        <p>Safe place to share creativity in all forms</p>
    )
  }
  function MyInput() {
    return (
        <form className="button-pads">
          <label>Share: </label>
          <input type="text" className="button-pads"/>
            <button>Tell people!</button>
        </form>
    )
  }
}

export default App;
