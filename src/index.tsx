//code created and maintained by Eric Patton

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='process' element={<Page idx={0}/>} />
        <Route path='about' element={<Page idx={1}/>} />
        <Route path='contact' element={<Page idx={2}/>} />
        <Route path='testimonials' element={<Page idx={3}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
