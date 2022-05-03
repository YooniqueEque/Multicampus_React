import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';
//import ArrayTest from './ArrayTest';
//import BoardList from './BoardList';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//import ServerConnection from './ServerConnection';
// import A from './ReviewTest';
// import B from './ReviewTest2';
// import Book from './ReviewTest3';
// import User from './ReviewTest4';

  {/* <React.StrictMode>
      <App />
      <hr />
      <A />
      <hr />
      <B />
      <hr />
      <Book /> 
      <hr />
      <User name="오지명" address="서울시 역삼동"/>
      <hr/>
      <ArrayTest />
      <BoardList />
      <ServerConnection />
  </React.StrictMode>*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
