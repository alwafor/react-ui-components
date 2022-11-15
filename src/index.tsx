import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import './assets/styles/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
