import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test'

const total = sum(1, 2)
console.log(total)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


