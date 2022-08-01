import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

import { UserTokenProvider, UserNicknameProvider } from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserTokenProvider>
        <UserNicknameProvider>
          <App />
        </UserNicknameProvider>
      </UserTokenProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
