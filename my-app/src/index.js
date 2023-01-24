import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CustomProvider from "./Context/CustomProvider"
//import './firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider> 
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);

reportWebVitals();
