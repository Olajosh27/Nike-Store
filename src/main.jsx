import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No root element found in index.html to mount the React application.");
}
