import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./router/auth');

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json());
app.use(cors());
app.use('/auth', auth);

// async function start() {...}

// start()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
