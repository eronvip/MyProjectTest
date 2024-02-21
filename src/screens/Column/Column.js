import logo from '../../images/logo.svg';
import './styles.css';

export const Column = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='noto-sans-font'>日本語：Noto SansCJK JP</div>
      </header>
    </div>
  );
}
