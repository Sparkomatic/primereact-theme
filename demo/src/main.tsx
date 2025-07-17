import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './supernova-css-export/tokens.css';
import './component-overrides.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
