import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner }from './components/KandyKorner';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


//importing BrowserRouter and wrapping KandyKorner in it has enabled routing
//for the entire application
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <KandyKorner />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
