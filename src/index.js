import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import IndoorBike from "./Pages/IndoorBike";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./Pages/Layout";
import Treadmill from "./Pages/Treadmill";
import StepMachine from "./Pages/StepMachine";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <div className={"container mx-auto equipment-interface"}>
            {/*<Equipment></Equipment>*/}
          <hr/>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Layout/>}>
                      <Route index element={<Landing/>} />
                      <Route path={"Treadmill"} element={<Treadmill/>} />
                      <Route path={"IndoorBike"} element={<IndoorBike/>} />
                      <Route path={"StepMachine"} element={<StepMachine/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>

      {/*<Equipment/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
