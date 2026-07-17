import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SiteLayout from '../components/SiteLayout';
import Publications from '../components/Publications';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><SiteLayout activeSection="publications"><Publications /></SiteLayout></StrictMode>,
);
