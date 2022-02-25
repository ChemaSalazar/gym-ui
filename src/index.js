import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StopWatch from "./Components/StopWatch/StopWatch";
import reportWebVitals from './reportWebVitals';
// import Equipment from "./Equipment";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <StopWatch/>
      {/*<Equipment/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
