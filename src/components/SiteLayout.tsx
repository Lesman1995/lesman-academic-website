import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface SiteLayoutProps {
  activeSection: string;
  children: ReactNode;
}

export default function SiteLayout({ activeSection, children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf9]" id="app-root">
      <Header activeSection={activeSection} />
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12 md:py-16" id="main-content">
        <div className="transition-opacity duration-200">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
