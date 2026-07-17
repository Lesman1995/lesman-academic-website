/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'research', label: 'RESEARCH', href: '/research/' },
    { id: 'publications', label: 'PUBLICATIONS', href: '/publications/' },
    { id: 'teaching', label: 'TEACHING', href: '/teaching/' },
    { id: 'cv', label: 'CV', href: '/cv/' },
    { id: 'contact', label: 'CONTACT', href: '/contact/' },
  ];

  return (
    <div className="w-full flex flex-col" id="header-wrapper">
      <header
        className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
        id="site-navigation-bar"
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 hover:opacity-80 transition-opacity"
            id="compact-brand-logo"
          >
            <span className="font-semibold text-sm tracking-[0.08em] font-sans">Lesman Ghazaryan</span>
          </a>

          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1 text-xs font-semibold tracking-wider transition-all duration-150 relative group ${
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-950'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-[-10px] left-3 right-3 h-0.5 bg-slate-950 transition-transform origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 -mr-2 text-slate-600 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 rounded-md"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t border-slate-200/80 bg-white px-6 py-4 space-y-1 shadow-lg absolute top-14 left-0 w-full animate-fade-in"
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block px-3 py-2.5 text-xs font-bold tracking-wider rounded-md transition-colors ${
                    isActive ? 'text-slate-950 bg-slate-100' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </header>
    </div>
  );
}
