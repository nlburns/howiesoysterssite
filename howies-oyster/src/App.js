import howielogo from './howielogo.svg';
import instagram from './instagram.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={howielogo} className="App-logo" alt="logo" />
        <div className='App-body'>
          <p>
            Food truck and catering serving the greater Delmarva area.
          </p>
          <p>
            Website coming soon...
          </p>
        </div>
      </header>
      <footer className="App-footer">
        <p>Follow us: </p>
        <a href="https://www.instagram.com/howies.on.chincoteague">
        <img src={instagram} alt="instagram" className='social-link'/>
        </a>
      </footer>
    </div>
  );
}

export default App;
