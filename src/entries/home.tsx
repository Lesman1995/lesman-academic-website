import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiteLayout from '../components/SiteLayout';
import Home from '../components/Home';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteLayout activeSection="home"><Home /></SiteLayout>
  </StrictMode>,
);
