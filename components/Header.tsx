'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition"
        >
          JHONNY<span className="text-zinc-500 font-normal">.MATILDO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-900 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-900 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}