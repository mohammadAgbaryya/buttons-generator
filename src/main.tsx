import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Import global CSS

import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
