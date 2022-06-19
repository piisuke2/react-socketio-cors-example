import React from 'react';
import ReactDOM from 'react-dom/client';
// TIPS: site-bのcssに影響しないようにCSSはCSS in JS, styled-componentsなどを使う
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  // TIPS: IDはsite-bで埋め込む時のIDにする
  // document.getElementById('root') as HTMLElement
  document.getElementById('react-app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
