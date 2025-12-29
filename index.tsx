import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Check if the DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}