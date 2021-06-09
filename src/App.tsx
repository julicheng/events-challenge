import { useCallback, useEffect } from 'react';
import api from './api';
import logo from './logo.svg';

function App() {
  const test = useCallback(async () => {
    try {
      const res = await api.artist.getArtist('123494864');
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    test();
  }, [test]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
