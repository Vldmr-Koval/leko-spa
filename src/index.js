import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './pages/App'

// import router from './router/router';
// import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);


