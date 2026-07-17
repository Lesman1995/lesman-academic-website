import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiteLayout from '../components/SiteLayout';
import Research from '../components/Research';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><SiteLayout activeSection="research"><Research /></SiteLayout></StrictMode>,
);
