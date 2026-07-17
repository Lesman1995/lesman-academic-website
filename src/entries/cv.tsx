import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiteLayout from '../components/SiteLayout';
import CV from '../components/CV';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><SiteLayout activeSection="cv"><CV /></SiteLayout></StrictMode>,
);
