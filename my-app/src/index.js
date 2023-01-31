import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomProvider from "./Context/CustomProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider> 
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      <ToastContainer autoClose={2000}/>
    </CustomProvider>
  </React.StrictMode>
);


