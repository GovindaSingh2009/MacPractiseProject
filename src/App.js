//import logo from './logo.svg';
import './App.css';
import ClickButton from './Components/ClickButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <h1>
          My first project
        </h1>
        <ClickButton />
      </header>
    </div>
  );
}

export default App;
