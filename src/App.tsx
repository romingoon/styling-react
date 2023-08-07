import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={reactLogo} className='logo' alt='logo' />
        <img src={viteLogo} className='logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and Save to reload.
        </p>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
