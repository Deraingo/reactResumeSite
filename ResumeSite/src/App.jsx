import { useState } from 'react';
import './App.css';
import Sidebar from './sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className='header'>
          <h1>Daniel Wakefield</h1>
          <div className='contents'>
            <a className='social-link' href='https://github.com/Deraingo' target="_blank">Github</a>
            <a className='social-link' href='https://www.linkedin.com/in/daniel-wakefield-a4679023b' target="_blank">LinkedIn</a>
            <a className='social-link' href='https://www.instagram.com/deraingo/' target="_blank">Instagram</a>
          </div>
        </div>
        {/* Other components and main content go here */}
      </div>
    </div>
  );
}

export default App;