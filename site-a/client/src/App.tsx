import React, { useEffect, useState } from 'react';
// TIPS: site-bから画像を読み込もうとするので、importではなくsite-aのURLで読み込み
// import logo from './logo.svg';
// TIPS: site-bのcssに影響しないようにCSSはCSS in JS, styled-componentsなどを使う
// import './App.css';
import { io } from 'socket.io-client';

const logo = process.env.REACT_APP_SITE_A_URL + '/logo.svg';
const siteA = process.env.REACT_APP_SITE_A_URL || '';

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const socket = io(siteA);
    socket.on('connect', () => console.log('connect'));
    socket.on('serverTime', (serverTime) => setTime(serverTime))    
  }, []);

  // TIPS: site-bのCSSを継承しないようにinitialを設定
  return (
    <div style={{all: 'initial'}}>
      <div style={{border: "1px solid gray"}}>
        <div>
          ServerTime: {time}
        </div>
        <img src={logo} style={{height: "200px"}} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
