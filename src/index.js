import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyRoutes from "./routers/routers";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);

