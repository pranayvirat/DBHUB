import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/about'
import PostgreSQL from './components/postgresql'
import MongoDB from './components/mongodb'
import MySQL from './components/mysql'
import AWS from './components/aws'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/postgresql" element={<PostgreSQL />} />
      <Route path="/mysql" element={<MySQL />} />
      <Route path="/aws" element={<AWS />} />
      <Route path="/mongodb" element={<MongoDB />} />
    </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
