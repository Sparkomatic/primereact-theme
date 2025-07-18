import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './prime-themes/my-custom-theme.css'; // Import the compiled custom theme

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
