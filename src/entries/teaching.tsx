import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiteLayout from '../components/SiteLayout';
import Teaching from '../components/Teaching';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><SiteLayout activeSection="teaching"><Teaching /></SiteLayout></StrictMode>,
);
