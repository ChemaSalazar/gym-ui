import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Equipment from './Equipment';
import StopWatch from "./Components/StopWatch/StopWatch";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <StopWatch/>
      <Equipment/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// var stopwatch = document.getElementsByClassName("btn-one");
// var stopwatch2 = document.getElementsByClassName("btn-two");
// var componentstate = document.getElementsByClassName("main-button");
//
// stopwatch.addEventListener('click', function(e){
//     componentstate.click();
// });
//
// stopwatch2.addEventListener('click', function(e){
//     componentstate.click();
// });