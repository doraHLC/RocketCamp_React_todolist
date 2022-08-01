import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { UserTokenProvider, UserNicknameProvider } from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserTokenProvider>
        <UserNicknameProvider>
          <App />
        </UserNicknameProvider>
      </UserTokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
